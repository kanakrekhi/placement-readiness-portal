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

    // ALSO save into progress table
    const newEntry = new Progress({
      email,
      role,
      module,
      score: 0,
      verdict: "Not Eligible"
    });

    await newEntry.save();

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





/* ================= START SERVER ================= */

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});


