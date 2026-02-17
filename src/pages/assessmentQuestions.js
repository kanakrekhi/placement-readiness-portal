// assessmentQuestions.js
export const assessmentQuestions = [
  {
    id: 1,
    question: "How do you prefer to spend your free time?",
    options: [
      { text: "Building websites or apps", roles: ["full-stack", "ai-data-analyst"] },
      { text: "Solving puzzles or analyzing data", roles: ["financial-analyst", "ai-data-analyst"] },
      { text: "Reading about psychology and human behavior", roles: ["psychologist"] },
      { text: "Following legal cases and debates", roles: ["lawyer"] },
      { text: "Learning about security and encryption", roles: ["cyber-security"] }
    ]
  },
  {
    id: 2,
    question: "What's your strongest skill?",
    options: [
      { text: "Logical thinking and problem-solving", roles: ["full-stack", "cyber-security", "ai-data-analyst"] },
      { text: "Empathy and communication", roles: ["psychologist", "lawyer"] },
      { text: "Mathematical and statistical analysis", roles: ["financial-analyst", "ai-data-analyst"] },
      { text: "Attention to detail", roles: ["lawyer", "cyber-security"] },
      { text: "Creativity and innovation", roles: ["full-stack"] }
    ]
  },
  {
    id: 3,
    question: "What kind of work environment do you prefer?",
    options: [
      { text: "Remote, working independently", roles: ["full-stack", "ai-data-analyst"] },
      { text: "Corporate/Office setting", roles: ["financial-analyst", "lawyer"] },
      { text: "Collaborative team environment", roles: ["psychologist", "cyber-security"] },
      { text: "Mix of independent and team work", roles: ["full-stack", "financial-analyst"] }
    ]
  },
  {
    id: 4,
    question: "What's your primary motivation?",
    options: [
      { text: "High salary potential", roles: ["full-stack", "financial-analyst", "lawyer"] },
      { text: "Making a difference in people's lives", roles: ["psychologist", "cyber-security"] },
      { text: "Solving complex problems", roles: ["ai-data-analyst", "cyber-security"] },
      { text: "Job stability and respect", roles: ["lawyer", "financial-analyst"] }
    ]
  },
  {
    id: 5,
    question: "How do you handle challenges?",
    options: [
      { text: "Break them down systematically", roles: ["full-stack", "ai-data-analyst"] },
      { text: "Research and gather evidence", roles: ["lawyer", "financial-analyst"] },
      { text: "Discuss with others", roles: ["psychologist"] },
      { text: "Look for security vulnerabilities", roles: ["cyber-security"] }
    ]
  }
];

export const roleDescriptions = {
  "full-stack": {
    title: "Full Stack Developer",
    description: "Perfect for creative problem-solvers who enjoy building complete web applications from front to back.",
    matchPhrase: "You love bringing ideas to life through code!",
    icon: "💻"
  },
  "cyber-security": {
    title: "Cyber Security Expert",
    description: "Ideal for detail-oriented individuals who enjoy protecting systems and staying one step ahead of threats.",
    matchPhrase: "You have a hacker's mindset but use it for good!",
    icon: "🔒"
  },
  "psychologist": {
    title: "Psychologist",
    description: "Great for empathetic listeners who want to understand and help improve human behavior.",
    matchPhrase: "You naturally understand what makes people tick!",
    icon: "🧠"
  },
  "financial-analyst": {
    title: "Financial Analyst",
    description: "Perfect for number-crunchers who enjoy guiding investment decisions with data.",
    matchPhrase: "You see patterns in numbers that others miss!",
    icon: "📊"
  },
  "ai-data-analyst": {
    title: "AI & Data Analyst",
    description: "Ideal for tech enthusiasts who want to work with cutting-edge AI and machine learning tools.",
    matchPhrase: "You're excited about the future of technology!",
    icon: "🤖"
  },
  "lawyer": {
    title: "Lawyer",
    description: "Great for those who love argument, research, and upholding justice through legal frameworks.",
    matchPhrase: "You have a natural talent for persuasion and analysis!",
    icon: "⚖️"
  }
};