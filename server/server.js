const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserData = require("./models/UserData");
const Progress = require("./models/Progress");


const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

/* ================= DATABASE CONNECTION ================= */

mongoose.connect("mongodb://127.0.0.1:27017/placementDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

/* ================= LOGIN + REGISTER ================= */

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // check if user already exists
  let user = await UserData.findOne({ email });

  if (!user) {
    // 👉 if user not found → create new user automatically
    user = new UserData({
      email,
      password
    });
    await user.save();
  }

  res.json({
    success: true,
    email: user.email
  });
});

/* ================= SAVE ROLE + MODULE ================= */

// app.post("/api/saveDetails", async (req, res) => {
//   try {
//     const { email, role, module } = req.body;

//     await UserData.updateOne(
//       { email },
//       { $set: { role, module } }
//     );

//     res.json({ success: true });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.post("/api/saveDetails", async (req, res) => {
  try {
    const { email, role, module } = req.body;

    // update user table
    await UserData.updateOne(
      { email },
      { $set: { role, module } }
    );

    // ALSO save into progress table (Upsert to avoid duplicates)
    await Progress.updateOne(
      { email, role, module },
      {
        $setOnInsert: {
          score: 0,
          watchTime: 0,
          verdict: "Not Eligible"
        }
      },
      { upsert: true }
    );

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






/* ================= FETCH USER PROGRESS (Dashboard) ================= */

app.get("/api/getProgress/:email", async (req, res) => {
  try {
    const { email } = req.params;

    // Fetch all progress records for this user
    const progressData = await Progress.find({ email });

    res.json(progressData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= FETCH USER DETAILS (Single) ================= */
app.get("/api/userDetails/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await UserData.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      role: user.role,
      module: user.module
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= UPDATE PROGRESS ================= */

app.post("/api/updateProgress", async (req, res) => {
  try {
    const { email, watchTime, score, role, module } = req.body;

    let searchCriteria = { email };

    if (role && module) {
      searchCriteria.role = role;
      searchCriteria.module = module;
    } else {
      const user = await UserData.findOne({ email });
      if (user) {
        searchCriteria.role = user.role;
        searchCriteria.module = user.module;
      }
    }

    let progress = await Progress.findOne(searchCriteria);

    if (!progress) {
      if (searchCriteria.role && searchCriteria.module) {
        progress = new Progress({
          email,
          role: searchCriteria.role,
          module: searchCriteria.module,
          score: score || 0,
          watchTime: watchTime || 0
        });
      } else {
        return res.status(404).json({ error: "Progress record not found and insufficient info to create" });
      }
    }

    if (watchTime !== undefined) progress.watchTime = watchTime;
    if (score !== undefined) progress.score = score;

    if (progress.score >= 80) {
      progress.verdict = "Eligible";
    } else {
      progress.verdict = "Not Eligible";
    }

    await progress.save();

    res.json({ success: true, progress });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= START SERVER ================= */

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});


