import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Tabs,
  Tab,
  ProgressBar,
  Button,
  Card
} from "react-bootstrap";

// FULL STACK PDFs
import progPdf from "../assets/programming-fundamentals-detailed.pdf";
import frontPdf from "../assets/frontend-development-detailed.pdf";
import backPdf from "../assets/backend-development-detailed.pdf";
import systemPdf from "../assets/system-design-basics-detailed.pdf";

// CYBER SECURITY PDFs (already working ones)
import cyberPdf from "../assets/cyber-security-fundamentals.pdf";
import networkingPdf from "../assets/networking-for-security.pdf";
import linuxPdf from "../assets/linux-for-security.pdf";
import webAppPdf from "../assets/web-application-security.pdf";
import ethicalPdf from "../assets/ethical-hacking-basics.pdf";

// PSYCHOLOGY PDFs
import psychPdf from "../assets/psychology-foundations.pdf";
import counselingPdf from "../assets/counseling-techniques.pdf";
import mentalPdf from "../assets/mental-health-assessment.pdf";

import accPdf from "../assets/financial-accounting-basics.pdf";
import corpPdf from "../assets/corporate-finance.pdf";
import modelPdf from "../assets/financial-modeling.pdf";
import investPdf from "../assets/investment-analysis.pdf";

import statsPdf from "../assets/statistics-probability.pdf";
import sqlPdf from "../assets/sql-data-analysis.pdf";
import pythonPdf from "../assets/python-for-data.pdf";
import mlPdf from "../assets/machine-learning-intro.pdf";

import legalFundPdf from "../assets/legal-system-fundamentals.pdf";
import criminalPdf from "../assets/criminal-civil-law.pdf";
import corporateLawPdf from "../assets/corporate-cyber-law.pdf";
import draftingPdf from "../assets/legal-drafting-research.pdf";


/* =====================
   MODULE DATA
===================== */

const moduleData = {
  "cyber-security": [
    {
      title: "Cyber Security Fundamentals",
      video: "https://www.youtube.com/embed/inWWhr5tnEA",
      pdf: cyberPdf,
      notes: "CIA triad, threats, real-world attacks.",
      questions: [
        {
          q: "What does CIA stand for?",
          options: [
            "Confidentiality Integrity Availability",
            "Central Intelligence Agency",
            "Cyber Internet Access"
          ],
          answer: 0
        },
        {
          q: "What is a phishing attack?",
          options: [
            "Fraudulent emails to steal data",
            "Physical theft",
            "Network interruption"
          ],
          answer: 0
        },
        {
          q: "What is malware?",
          options: [
            "Malicious software",
            "Hardware firewall",
            "Security camera"
          ],
          answer: 0
        },
        {
          q: "What is a firewall used for?",
          options: [
            "Monitoring network traffic",
            "Speeding up internet",
            "Storing data"
          ],
          answer: 0
        },
        {
          q: "What is encryption?",
          options: [
            "Converting data to secret code",
            "Deleting data",
            "Copying data"
          ],
          answer: 0
        },
        {
          q: "What is a DDoS attack?",
          options: [
            "Overwhelming a server with traffic",
            "Data theft",
            "Virus infection"
          ],
          answer: 0
        },
        {
          q: "What is two-factor authentication?",
          options: [
            "Two-step verification process",
            "Two passwords",
            "Two users"
          ],
          answer: 0
        },
        {
          q: "What is ransomware?",
          options: [
            "Malware that demands payment",
            "Software update",
            "Antivirus program"
          ],
          answer: 0
        },
        {
          q: "What is a vulnerability?",
          options: [
            "Weakness in system",
            "Strong security",
            "Network speed"
          ],
          answer: 0
        },
        {
          q: "What is social engineering?",
          options: [
            "Manipulating people for information",
            "Building social networks",
            "Social media marketing"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Networking for Security",
      video: "https://www.youtube.com/embed/qiQR5rTSshw",
      pdf: networkingPdf,
      notes: "TCP/IP, DNS, Ports, Firewalls.",
      questions: [
        {
          q: "Which protocol is used for browsing?",
          options: ["HTTP", "FTP", "SMTP"],
          answer: 0
        },
        {
          q: "What does IP address identify?",
          options: [
            "Device on network",
            "Email account",
            "Website content"
          ],
          answer: 0
        },
        {
          q: "What is DNS?",
          options: [
            "Domain Name System",
            "Data Network Security",
            "Digital Name Service"
          ],
          answer: 0
        },
        {
          q: "Which port is used for HTTPS?",
          options: ["443", "80", "21"],
          answer: 0
        },
        {
          q: "What is TCP?",
          options: [
            "Transmission Control Protocol",
            "Total Control Program",
            "Technical Connection Port"
          ],
          answer: 0
        },
        {
          q: "What is a subnet mask?",
          options: [
            "Divides IP networks",
            "Encrypts data",
            "Blocks websites"
          ],
          answer: 0
        },
        {
          q: "Which protocol sends emails?",
          options: ["SMTP", "HTTP", "FTP"],
          answer: 0
        },
        {
          q: "What is a VPN?",
          options: [
            "Virtual Private Network",
            "Virus Protection Node",
            "Verified Public Network"
          ],
          answer: 0
        },
        {
          q: "What is a MAC address?",
          options: [
            "Physical device identifier",
            "Email address",
            "Website URL"
          ],
          answer: 0
        },
        {
          q: "What is a packet?",
          options: [
            "Unit of data transmitted",
            "Security tool",
            "Network cable"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Linux for Security",
      video: "https://www.youtube.com/embed/IVquJh3DXUA",
      pdf: linuxPdf,
      notes: "Linux commands, logs, permissions.",
      questions: [
        {
          q: "Which command lists files?",
          options: ["ls", "cd", "rm"],
          answer: 0
        },
        {
          q: "What does 'chmod' command do?",
          options: [
            "Changes file permissions",
            "Creates directory",
            "Deletes file"
          ],
          answer: 0
        },
        {
          q: "Which command shows current directory?",
          options: ["pwd", "ls", "cd"],
          answer: 0
        },
        {
          q: "What is root user in Linux?",
          options: [
            "Administrator with full access",
            "Regular user",
            "Guest account"
          ],
          answer: 0
        },
        {
          q: "Which command is used to change directory?",
          options: ["cd", "cp", "mv"],
          answer: 0
        },
        {
          q: "What does 'grep' command do?",
          options: [
            "Searches text patterns",
            "Lists processes",
            "Shows disk usage"
          ],
          answer: 0
        },
        {
          q: "Where are system logs stored?",
          options: ["/var/log", "/home", "/tmp"],
          answer: 0
        },
        {
          q: "Which command shows running processes?",
          options: ["ps", "ls", "rm"],
          answer: 0
        },
        {
          q: "What does 'sudo' allow?",
          options: [
            "Execute commands as superuser",
            "Delete files",
            "Browse internet"
          ],
          answer: 0
        },
        {
          q: "Which command copies files?",
          options: ["cp", "mv", "rm"],
          answer: 0
        }
      ]
    },
    {
      title: "Web Application Security",
      video: "https://www.youtube.com/embed/2_lswM1S264",
      pdf: webAppPdf,
      notes: "OWASP Top 10, SQLi, XSS.",
      questions: [
        {
          q: "SQL Injection targets?",
          options: ["Database", "Firewall", "Antivirus"],
          answer: 0
        },
        {
          q: "What is XSS?",
          options: [
            "Cross-Site Scripting",
            "XML Security Standard",
            "Xtra Security System"
          ],
          answer: 0
        },
        {
          q: "What is OWASP?",
          options: [
            "Open Web Application Security Project",
            "Online Web Access Protocol",
            "Optimized Web Application Process"
          ],
          answer: 0
        },
        {
          q: "What is CSRF?",
          options: [
            "Cross-Site Request Forgery",
            "Cyber Security Response Force",
            "Client-Side Request Format"
          ],
          answer: 0
        },
        {
          q: "What is session hijacking?",
          options: [
            "Stealing user session tokens",
            "Creating new session",
            "Ending a session"
          ],
          answer: 0
        },
        {
          q: "What is input validation?",
          options: [
            "Checking user input for safety",
            "Deleting all input",
            "Storing passwords"
          ],
          answer: 0
        },
        {
          q: "What is broken authentication?",
          options: [
            "Flaws in login systems",
            "Strong passwords",
            "Two-factor auth"
          ],
          answer: 0
        },
        {
          q: "What is sensitive data exposure?",
          options: [
            "Leaking confidential information",
            "Encrypting data",
            "Backing up data"
          ],
          answer: 0
        },
        {
          q: "What is a security misconfiguration?",
          options: [
            "Unsafe default settings",
            "Strong security setup",
            "Firewall enabled"
          ],
          answer: 0
        },
        {
          q: "What is XXE?",
          options: [
            "XML External Entity attack",
            "Xtra Xss Exploit",
            "Xerox XML Engine"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Ethical Hacking Basics",
      video: "https://www.youtube.com/embed/3Kq1MIfTWCE",
      pdf: ethicalPdf,
      notes: "Footprinting, scanning lifecycle.",
      questions: [
        {
          q: "Footprinting is used for?",
          options: ["Information gathering", "Encryption", "Backup"],
          answer: 0
        },
        {
          q: "What is scanning in ethical hacking?",
          options: [
            "Finding open ports and services",
            "Deleting files",
            "Installing software"
          ],
          answer: 0
        },
        {
          q: "What is enumeration?",
          options: [
            "Extracting system information",
            "Encrypting data",
            "Backup creation"
          ],
          answer: 0
        },
        {
          q: "What is a penetration test?",
          options: [
            "Authorized simulated attack",
            "Unauthorized hacking",
            "System update"
          ],
          answer: 0
        },
        {
          q: "What is a white hat hacker?",
          options: [
            "Ethical security professional",
            "Malicious attacker",
            "Script kiddie"
          ],
          answer: 0
        },
        {
          q: "What is vulnerability assessment?",
          options: [
            "Identifying security weaknesses",
            "Exploiting systems",
            "Installing malware"
          ],
          answer: 0
        },
        {
          q: "What is social engineering in hacking?",
          options: [
            "Manipulating people",
            "Network scanning",
            "Password cracking"
          ],
          answer: 0
        },
        {
          q: "What is a brute force attack?",
          options: [
            "Trying all password combinations",
            "Phishing emails",
            "Network sniffing"
          ],
          answer: 0
        },
        {
          q: "What is sniffing?",
          options: [
            "Capturing network traffic",
            "Blocking traffic",
            "Encrypting data"
          ],
          answer: 0
        },
        {
          q: "What is the hacking methodology order?",
          options: [
            "Reconnaissance, Scanning, Gaining Access",
            "Scanning, Reconnaissance, Access",
            "Access, Reconnaissance, Scanning"
          ],
          answer: 0
        }
      ]
    }
  ],

  /* ================= FULL STACK ================= */

  "full-stack": [
    {
      title: "Programming Fundamentals",
      video: "https://www.youtube.com/embed/zOjov-2OZ0E",
      pdf: progPdf,
      notes: "Variables, loops, functions, OOP basics.",
      questions: [
        {
          q: "Which is a programming language?",
          options: ["HTML", "Python", "CSS"],
          answer: 1
        },
        {
          q: "What is a variable?",
          options: [
            "Container for storing data",
            "A type of loop",
            "A function name"
          ],
          answer: 0
        },
        {
          q: "What does a for loop do?",
          options: [
            "Repeats code multiple times",
            "Defines a function",
            "Creates a variable"
          ],
          answer: 0
        },
        {
          q: "What is OOP?",
          options: [
            "Object-Oriented Programming",
            "Online Operating Process",
            "Output Operations Protocol"
          ],
          answer: 0
        },
        {
          q: "What is a function?",
          options: [
            "Reusable block of code",
            "Type of variable",
            "Programming language"
          ],
          answer: 0
        },
        {
          q: "What is an array?",
          options: [
            "Collection of elements",
            "Single value",
            "Function type"
          ],
          answer: 0
        },
        {
          q: "What does 'if-else' statement do?",
          options: [
            "Conditional execution",
            "Loop execution",
            "Variable declaration"
          ],
          answer: 0
        },
        {
          q: "What is a class in OOP?",
          options: [
            "Blueprint for objects",
            "Type of loop",
            "Data type"
          ],
          answer: 0
        },
        {
          q: "What is inheritance in OOP?",
          options: [
            "Class acquiring properties of another",
            "Creating new variables",
            "Deleting objects"
          ],
          answer: 0
        },
        {
          q: "What is debugging?",
          options: [
            "Finding and fixing errors",
            "Writing code",
            "Running programs"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Frontend Development",
      video: "https://www.youtube.com/embed/3JluqTojuME",
      pdf: frontPdf,
      notes: "HTML, CSS, JavaScript, React basics.",
      questions: [
        {
          q: "Which is used for styling?",
          options: ["HTML", "CSS", "Python"],
          answer: 1
        },
        {
          q: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language"
          ],
          answer: 0
        },
        {
          q: "Which tag is used for headings in HTML?",
          options: ["<h1>", "<head>", "<header>"],
          answer: 0
        },
        {
          q: "What is JavaScript used for?",
          options: [
            "Adding interactivity to web pages",
            "Styling web pages",
            "Structuring web pages"
          ],
          answer: 0
        },
        {
          q: "What is React?",
          options: [
            "JavaScript library for UI",
            "CSS framework",
            "Database"
          ],
          answer: 0
        },
        {
          q: "What does CSS selector do?",
          options: [
            "Selects elements to style",
            "Creates HTML elements",
            "Runs JavaScript"
          ],
          answer: 0
        },
        {
          q: "What is a component in React?",
          options: [
            "Reusable UI piece",
            "CSS class",
            "HTML tag"
          ],
          answer: 0
        },
        {
          q: "Which tag creates a link in HTML?",
          options: ["<a>", "<link>", "<href>"],
          answer: 0
        },
        {
          q: "What is responsive design?",
          options: [
            "Works on all screen sizes",
            "Fast loading pages",
            "Animated content"
          ],
          answer: 0
        },
        {
          q: "What is the DOM?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Output Method"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Backend Development",
      video: "https://www.youtube.com/embed/Oe421EPjeBE",
      pdf: backPdf,
      notes: "Node.js, Express, APIs, Databases.",
      questions: [
        {
          q: "Backend runs on?",
          options: ["Server", "Browser", "Monitor"],
          answer: 0
        },
        {
          q: "What is Node.js?",
          options: [
            "JavaScript runtime on server",
            "CSS framework",
            "Database"
          ],
          answer: 0
        },
        {
          q: "What is an API?",
          options: [
            "Application Programming Interface",
            "Advanced Programming Input",
            "Application Process Integration"
          ],
          answer: 0
        },
        {
          q: "What is Express.js?",
          options: [
            "Web framework for Node.js",
            "Database",
            "Frontend library"
          ],
          answer: 0
        },
        {
          q: "What is a database?",
          options: [
            "Structured data storage",
            "Programming language",
            "Web server"
          ],
          answer: 0
        },
        {
          q: "What is SQL?",
          options: [
            "Structured Query Language",
            "Simple Query Logic",
            "System Query Language"
          ],
          answer: 0
        },
        {
          q: "What is REST?",
          options: [
            "Architectural style for APIs",
            "Database type",
            "Programming language"
          ],
          answer: 0
        },
        {
          q: "What is authentication?",
          options: [
            "Verifying user identity",
            "Storing data",
            "Sending emails"
          ],
          answer: 0
        },
        {
          q: "What is middleware?",
          options: [
            "Functions in request-response cycle",
            "Database queries",
            "HTML templates"
          ],
          answer: 0
        },
        {
          q: "What is JSON?",
          options: [
            "JavaScript Object Notation",
            "Java System Object Network",
            "JavaScript Online Network"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "System Design Basics",
      video: "https://www.youtube.com/embed/UzLMhqg3_Wc",
      pdf: systemPdf,
      notes: "Scalability, load balancing, caching.",
      questions: [
        {
          q: "Load balancer is used for?",
          options: ["Design UI", "Distribute traffic", "Write code"],
          answer: 1
        },
        {
          q: "What is scalability?",
          options: [
            "System's ability to handle growth",
            "System's color scheme",
            "System's loading time"
          ],
          answer: 0
        },
        {
          q: "What is caching?",
          options: [
            "Storing frequently accessed data",
            "Deleting old data",
            "Encrypting data"
          ],
          answer: 0
        },
        {
          q: "What is horizontal scaling?",
          options: [
            "Adding more servers",
            "Making server bigger",
            "Removing servers"
          ],
          answer: 0
        },
        {
          q: "What is vertical scaling?",
          options: [
            "Upgrading existing server",
            "Adding new servers",
            "Removing servers"
          ],
          answer: 0
        },
        {
          q: "What is a CDN?",
          options: [
            "Content Delivery Network",
            "Code Development Network",
            "Central Database Node"
          ],
          answer: 0
        },
        {
          q: "What is database indexing?",
          options: [
            "Speeding up queries",
            "Deleting data",
            "Backing up data"
          ],
          answer: 0
        },
        {
          q: "What is microservices architecture?",
          options: [
            "Breaking app into small services",
            "Single large application",
            "Frontend only design"
          ],
          answer: 0
        },
        {
          q: "What is message queue?",
          options: [
            "Communication between services",
            "Database table",
            "CSS framework"
          ],
          answer: 0
        },
        {
          q: "What is high availability?",
          options: [
            "System always accessible",
            "Fast processing",
            "Large storage"
          ],
          answer: 0
        }
      ]
    }
  ],
  /* 🧠 PSYCHOLOGIST TRACK */

  "psychologist": [
    {
      title: "Psychology Foundations",
      video: "https://www.youtube.com/embed/vo4pMVb0R6M",
      pdf: psychPdf,
      notes: "Human behaviour, cognition, memory, emotions.",
      questions: [
        {
          q: "What does psychology study?",
          options: [
            "Human behaviour and mind",
            "Only brain surgery",
            "Only physical fitness"
          ],
          answer: 0
        },
        {
          q: "Who is considered the father of psychology?",
          options: [
            "Wilhelm Wundt",
            "Sigmund Freud",
            "Carl Jung"
          ],
          answer: 0
        },
        {
          q: "What is classical conditioning?",
          options: [
            "Learning through association",
            "Learning through rewards",
            "Learning through observation"
          ],
          answer: 0
        },
        {
          q: "Which part of the brain is responsible for memory?",
          options: [
            "Hippocampus",
            "Cerebellum",
            "Brain stem"
          ],
          answer: 0
        },
        {
          q: "What is cognition?",
          options: [
            "Mental processes like thinking",
            "Physical movements",
            "Emotional reactions only"
          ],
          answer: 0
        },
        {
          q: "Who proposed the hierarchy of needs?",
          options: [
            "Abraham Maslow",
            "B.F. Skinner",
            "Jean Piaget"
          ],
          answer: 0
        },
        {
          q: "What is the id in Freud's theory?",
          options: [
            "Primitive and instinctual part",
            "Moral conscience",
            "Reality principle"
          ],
          answer: 0
        },
        {
          q: "Which type of memory has unlimited capacity?",
          options: [
            "Long-term memory",
            "Short-term memory",
            "Sensory memory"
          ],
          answer: 0
        },
        {
          q: "What is operant conditioning?",
          options: [
            "Learning through consequences",
            "Learning through association",
            "Learning through observation"
          ],
          answer: 0
        },
        {
          q: "The 'fight or flight' response is controlled by?",
          options: [
            "Sympathetic nervous system",
            "Parasympathetic system",
            "Somatic nervous system"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Counseling Techniques",
      video: "https://www.youtube.com/embed/3nD4k0i6y6o",
      pdf: counselingPdf,
      notes: "Active listening, empathy, CBT, therapy ethics.",
      questions: [
        {
          q: "Which is a key counseling skill?",
          options: [
            "Active listening",
            "Ignoring client",
            "Giving orders"
          ],
          answer: 0
        },
        {
          q: "What does CBT stand for?",
          options: [
            "Cognitive Behavioral Therapy",
            "Complete Body Treatment",
            "Central Brain Training"
          ],
          answer: 0
        },
        {
          q: "What is empathy in counseling?",
          options: [
            "Understanding client's feelings",
            "Feeling sorry for client",
            "Ignoring emotions"
          ],
          answer: 0
        },
        {
          q: "Which is an ethical principle in counseling?",
          options: [
            "Confidentiality",
            "Sharing client secrets",
            "Judging the client"
          ],
          answer: 0
        },
        {
          q: "What is unconditional positive regard?",
          options: [
            "Accepting client without judgment",
            "Only positive feedback",
            "Ignoring negative behavior"
          ],
          answer: 0
        },
        {
          q: "Who developed person-centered therapy?",
          options: [
            "Carl Rogers",
            "Sigmund Freud",
            "Albert Ellis"
          ],
          answer: 0
        },
        {
          q: "What is a defense mechanism?",
          options: [
            "Unconscious coping strategy",
            "Physical defense",
            "Medication type"
          ],
          answer: 0
        },
        {
          q: "Which is NOT a type of therapy?",
          options: [
            "Surgical therapy",
            "Group therapy",
            "Family therapy"
          ],
          answer: 0
        },
        {
          q: "What is transference in therapy?",
          options: [
            "Client projects feelings onto therapist",
            "Therapist projects feelings",
            "Ending therapy early"
          ],
          answer: 0
        },
        {
          q: "What is the purpose of rapport building?",
          options: [
            "Establish trust and connection",
            "Finish session quickly",
            "Avoid difficult topics"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Mental Health Assessment",
      video: "https://www.youtube.com/embed/ZwMlHkWKDwM",
      pdf: mentalPdf,
      notes: "Diagnosis basics, DSM-5, screening tools.",
      questions: [
        {
          q: "What is used for mental health diagnosis?",
          options: [
            "DSM-5",
            "HTML",
            "Linux Kernel"
          ],
          answer: 0
        },
        {
          q: "What does DSM-5 stand for?",
          options: [
            "Diagnostic and Statistical Manual",
            "Digital System Manual",
            "Disease State Management"
          ],
          answer: 0
        },
        {
          q: "Which is a common screening tool for depression?",
          options: [
            "PHQ-9",
            "MRI scan",
            "Blood test"
          ],
          answer: 0
        },
        {
          q: "What is GAD-7 used for?",
          options: [
            "Anxiety assessment",
            "Depression assessment",
            "Personality test"
          ],
          answer: 0
        },
        {
          q: "What is a clinical interview?",
          options: [
            "Structured conversation for assessment",
            "Job interview",
            "Casual chat"
          ],
          answer: 0
        },
        {
          q: "Which is a personality assessment tool?",
          options: [
            "MMPI",
            "Blood pressure monitor",
            "Thermometer"
          ],
          answer: 0
        },
        {
          q: "What is differential diagnosis?",
          options: [
            "Distinguishing between conditions",
            "Single diagnosis",
            "Physical examination"
          ],
          answer: 0
        },
        {
          q: "What does 'comorbidity' mean?",
          options: [
            "Co-occurring disorders",
            "Single disorder",
            "No disorder"
          ],
          answer: 0
        },
        {
          q: "Which is a symptom of major depression?",
          options: [
            "Persistent sadness",
            "Excessive happiness",
            "Increased energy"
          ],
          answer: 0
        },
        {
          q: "What is a risk assessment in mental health?",
          options: [
            "Evaluating self-harm or suicide risk",
            "Financial assessment",
            "Physical fitness test"
          ],
          answer: 0
        }
      ]
    }
  ],
  "financial-analyst": [
    {
      title: "Financial Accounting Basics",
      video: "https://www.youtube.com/embed/2rJujnpKiqM",
      pdf: accPdf,
      notes: "Balance sheet, income statement, cash flow statements and accounting principles.",
      questions: [
        {
          q: "What does P&L stand for?",
          options: [
            "Profit and Loss",
            "Price and Level",
            "Plan and Loan"
          ],
          answer: 0
        },
        {
          q: "What is a balance sheet?",
          options: [
            "Financial snapshot at a point in time",
            "Statement over a period",
            "Cash flow record"
          ],
          answer: 0
        },
        {
          q: "Assets = ?",
          options: [
            "Liabilities + Equity",
            "Revenue - Expenses",
            "Cash + Profit"
          ],
          answer: 0
        },
        {
          q: "What is revenue?",
          options: [
            "Income from operations",
            "Cost of goods sold",
            "Tax paid"
          ],
          answer: 0
        },
        {
          q: "Which is a current asset?",
          options: [
            "Cash",
            "Building",
            "Equipment"
          ],
          answer: 0
        },
        {
          q: "What does depreciation represent?",
          options: [
            "Wear and tear of assets",
            "Increase in value",
            "Profit margin"
          ],
          answer: 0
        },
        {
          q: "What is net income?",
          options: [
            "Revenue - Expenses",
            "Assets - Liabilities",
            "Cash inflow"
          ],
          answer: 0
        },
        {
          q: "Which statement shows cash movements?",
          options: [
            "Cash flow statement",
            "Balance sheet",
            "Income statement"
          ],
          answer: 0
        },
        {
          q: "What are liabilities?",
          options: [
            "Obligations owed",
            "Assets owned",
            "Owner's investment"
          ],
          answer: 0
        },
        {
          q: "What is retained earnings?",
          options: [
            "Accumulated profits kept in business",
            "Cash in bank",
            "Dividends paid"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Corporate Finance",
      video: "https://www.youtube.com/embed/WEDIj9JBTC8",
      pdf: corpPdf,
      notes: "Capital structure, cost of capital (WACC), valuation methods.",
      questions: [
        {
          q: "WACC stands for?",
          options: [
            "Weighted Average Cost of Capital",
            "Working Asset Capital Cost",
            "World Accounting Control Council"
          ],
          answer: 0
        },
        {
          q: "What is capital structure?",
          options: [
            "Mix of debt and equity",
            "Company's assets",
            "Revenue streams"
          ],
          answer: 0
        },
        {
          q: "What is equity?",
          options: [
            "Ownership in company",
            "Loan taken",
            "Interest paid"
          ],
          answer: 0
        },
        {
          q: "What is debt financing?",
          options: [
            "Borrowing money",
            "Issuing shares",
            "Selling assets"
          ],
          answer: 0
        },
        {
          q: "What is the cost of debt?",
          options: [
            "Interest rate on borrowings",
            "Dividend rate",
            "Tax rate"
          ],
          answer: 0
        },
        {
          q: "What is DCF valuation?",
          options: [
            "Discounted Cash Flow",
            "Direct Cash Flow",
            "Daily Cash Flow"
          ],
          answer: 0
        },
        {
          q: "What is leverage?",
          options: [
            "Use of debt",
            "Use of equity",
            "Cash reserves"
          ],
          answer: 0
        },
        {
          q: "What is a dividend?",
          options: [
            "Profit distributed to shareholders",
            "Interest on debt",
            "Tax payment"
          ],
          answer: 0
        },
        {
          q: "What is the time value of money?",
          options: [
            "Money today worth more than future",
            "Money loses value over time",
            "Money value stays constant"
          ],
          answer: 0
        },
        {
          q: "What is beta in finance?",
          options: [
            "Measure of volatility",
            "Interest rate",
            "Profit margin"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Financial Modeling",
      video: "https://www.youtube.com/embed/T77h6xZ4e1M",
      pdf: modelPdf,
      notes: "Excel modeling, forecasting revenue, profit projections and scenarios.",
      questions: [
        {
          q: "Financial models are mainly used for?",
          options: [
            "Forecasting",
            "Gaming",
            "Designing"
          ],
          answer: 0
        },
        {
          q: "What is a scenario analysis?",
          options: [
            "Testing different outcomes",
            "Single outcome",
            "Historical review"
          ],
          answer: 0
        },
        {
          q: "Which Excel function is used for loan payments?",
          options: [
            "PMT",
            "SUM",
            "AVERAGE"
          ],
          answer: 0
        },
        {
          q: "What is sensitivity analysis?",
          options: [
            "How variables affect outcome",
            "Fixed outcomes",
            "Random outcomes"
          ],
          answer: 0
        },
        {
          q: "What is a three-statement model?",
          options: [
            "Links IS, BS, CFS",
            "Only balance sheet",
            "Only income statement"
          ],
          answer: 0
        },
        {
          q: "What is NPV?",
          options: [
            "Net Present Value",
            "New Project Value",
            "Negative Profit Value"
          ],
          answer: 0
        },
        {
          q: "What is IRR?",
          options: [
            "Internal Rate of Return",
            "Interest Rate Return",
            "Investment Rate Ratio"
          ],
          answer: 0
        },
        {
          q: "What is a assumption in modeling?",
          options: [
            "Input variable used",
            "Output result",
            "Error check"
          ],
          answer: 0
        },
        {
          q: "What is a circular reference in Excel?",
          options: [
            "Formula refers to its own cell",
            "Broken formula",
            "Missing data"
          ],
          answer: 0
        },
        {
          q: "What is forecasting?",
          options: [
            "Predicting future performance",
            "Past performance",
            "Current status"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Investment Analysis",
      video: "https://www.youtube.com/embed/p7HKvqRI_Bo",
      pdf: investPdf,
      notes: "Stocks, bonds, portfolio diversification, and risk-return analysis.",
      questions: [
        {
          q: "Stocks represent?",
          options: [
            "Ownership in a company",
            "Debt instrument",
            "Insurance policy"
          ],
          answer: 0
        },
        {
          q: "What is a bond?",
          options: [
            "Debt security",
            "Equity share",
            "Derivative"
          ],
          answer: 0
        },
        {
          q: "What is diversification?",
          options: [
            "Spreading investments to reduce risk",
            "Investing in one stock",
            "Avoiding all risk"
          ],
          answer: 0
        },
        {
          q: "What is risk-return tradeoff?",
          options: [
            "Higher risk = Higher potential return",
            "Higher risk = Lower return",
            "No relationship"
          ],
          answer: 0
        },
        {
          q: "What is a portfolio?",
          options: [
            "Collection of investments",
            "Single investment",
            "Bank account"
          ],
          answer: 0
        },
        {
          q: "What is a mutual fund?",
          options: [
            "Pooled investment vehicle",
            "Single stock",
            "Government bond"
          ],
          answer: 0
        },
        {
          q: "What is the stock market?",
          options: [
            "Where shares are traded",
            "Bank for loans",
            "Insurance market"
          ],
          answer: 0
        },
        {
          q: "What is a dividend yield?",
          options: [
            "Dividend/Stock price",
            "Stock price/Earnings",
            "Revenue/Cost"
          ],
          answer: 0
        },
        {
          q: "What is market capitalization?",
          options: [
            "Share price × Shares outstanding",
            "Total revenue",
            "Total assets"
          ],
          answer: 0
        },
        {
          q: "What is a blue chip stock?",
          options: [
            "Large, stable company stock",
            "New company stock",
            "Bankrupt company"
          ],
          answer: 0
        }
      ]
    }
  ],
  /* ================= AI & DATA ANALYST ================= */
  "ai-data-analyst": [
    {
      title: "Statistics & Probability",
      video: "https://www.youtube.com/embed/xxpc-HPKN28",
      pdf: statsPdf,
      notes: "Mean, variance, probability distributions, basics of statistics.",
      questions: [
        {
          q: "What does mean represent?",
          options: [
            "Average value",
            "Maximum value",
            "Minimum value"
          ],
          answer: 0
        },
        {
          q: "What is the median?",
          options: [
            "Middle value in sorted data",
            "Most frequent value",
            "Average of all values"
          ],
          answer: 0
        },
        {
          q: "What does standard deviation measure?",
          options: [
            "Spread of data from mean",
            "Central tendency",
            "Total range"
          ],
          answer: 0
        },
        {
          q: "Probability of an event always lies between?",
          options: [
            "0 and 1",
            "-1 and 1",
            "0 and 100"
          ],
          answer: 0
        },
        {
          q: "What is variance?",
          options: [
            "Square of standard deviation",
            "Square root of standard deviation",
            "Average of data"
          ],
          answer: 0
        },
        {
          q: "Which distribution is also known as bell curve?",
          options: [
            "Normal distribution",
            "Binomial distribution",
            "Poisson distribution"
          ],
          answer: 0
        },
        {
          q: "What is the range of a dataset?",
          options: [
            "Maximum - Minimum",
            "Mean - Median",
            "Sum of all values"
          ],
          answer: 0
        },
        {
          q: "P(A and B) = P(A) × P(B) is true for?",
          options: [
            "Independent events",
            "Dependent events",
            "Mutually exclusive events"
          ],
          answer: 0
        },
        {
          q: "What is mode?",
          options: [
            "Most frequent value",
            "Middle value",
            "Average value"
          ],
          answer: 0
        },
        {
          q: "Correlation coefficient ranges between?",
          options: [
            "-1 and +1",
            "0 and 1",
            "-∞ and +∞"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "SQL for Data Analysis",
      video: "https://www.youtube.com/embed/HXV3zeQKqGY",
      pdf: sqlPdf,
      notes: "SQL queries, joins, filtering, grouping, analytics functions.",
      questions: [
        {
          q: "Which SQL command is used to retrieve data?",
          options: ["SELECT", "INSERT", "DELETE"],
          answer: 0
        },
        {
          q: "Which clause is used to filter rows in SQL?",
          options: ["WHERE", "GROUP BY", "ORDER BY"],
          answer: 0
        },
        {
          q: "What does JOIN do in SQL?",
          options: [
            "Combines rows from two tables",
            "Deletes a table",
            "Creates a new database"
          ],
          answer: 0
        },
        {
          q: "Which SQL function returns the number of rows?",
          options: ["COUNT()", "SUM()", "AVG()"],
          answer: 0
        },
        {
          q: "What is a primary key?",
          options: [
            "Uniquely identifies each row",
            "Allows duplicate values",
            "Can be NULL"
          ],
          answer: 0
        },
        {
          q: "Which statement is used to update data?",
          options: ["UPDATE", "ALTER", "MODIFY"],
          answer: 0
        },
        {
          q: "What does GROUP BY do?",
          options: [
            "Groups rows with same values",
            "Orders rows",
            "Filters rows"
          ],
          answer: 0
        },
        {
          q: "Which join returns all rows from left table?",
          options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN"],
          answer: 0
        },
        {
          q: "What is a foreign key?",
          options: [
            "References primary key of another table",
            "A type of index",
            "A unique constraint"
          ],
          answer: 0
        },
        {
          q: "Which clause is used with GROUP BY to filter groups?",
          options: ["HAVING", "WHERE", "FILTER"],
          answer: 0
        }
      ]
    },
    {
      title: "Python for Data",
      video: "https://www.youtube.com/embed/rfscVS0vtbw",
      pdf: pythonPdf,
      notes: "Pandas, NumPy, data cleaning and manipulation.",
      questions: [
        {
          q: "Which library is used for data manipulation?",
          options: ["NumPy", "Pandas", "Matplotlib"],
          answer: 1
        },
        {
          q: "What does Pandas DataFrame represent?",
          options: [
            "2D labeled data structure",
            "1D array",
            "3D visualization"
          ],
          answer: 0
        },
        {
          q: "Which function reads a CSV file in Pandas?",
          options: ["read_csv()", "open_csv()", "load_csv()"],
          answer: 0
        },
        {
          q: "What is NumPy primarily used for?",
          options: [
            "Numerical computing",
            "Data visualization",
            "Machine learning"
          ],
          answer: 0
        },
        {
          q: "How to handle missing values in Pandas?",
          options: [
            "dropna() or fillna()",
            "delete() or remove()",
            "skip() or ignore()"
          ],
          answer: 0
        },
        {
          q: "What is a Python list comprehension?",
          options: [
            "Concise way to create lists",
            "A type of loop",
            "A function definition"
          ],
          answer: 0
        },
        {
          q: "Which method returns first 5 rows of DataFrame?",
          options: ["head()", "first()", "top()"],
          answer: 0
        },
        {
          q: "What does iloc in Pandas do?",
          options: [
            "Integer position based indexing",
            "Label based indexing",
            "Boolean indexing"
          ],
          answer: 0
        },
        {
          q: "Which library is used for visualization?",
          options: ["Matplotlib", "NumPy", "Pandas"],
          answer: 0
        },
        {
          q: "What is a lambda function in Python?",
          options: [
            "Anonymous function",
            "Built-in function",
            "Recursive function"
          ],
          answer: 0
        }
      ]
    },
    {
      title: "Machine Learning Intro",
      video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      pdf: mlPdf,
      notes: "Supervised vs unsupervised learning, basic ML algorithms.",
      questions: [
        {
          q: "Which is an example of supervised learning?",
          options: ["Linear Regression", "Clustering", "K-Means"],
          answer: 0
        },
        {
          q: "What is classification in ML?",
          options: [
            "Predicting categories",
            "Predicting continuous values",
            "Grouping similar items"
          ],
          answer: 0
        },
        {
          q: "Which algorithm is used for regression?",
          options: [
            "Linear Regression",
            "K-Means",
            "Apriori"
          ],
          answer: 0
        },
        {
          q: "What is clustering?",
          options: [
            "Unsupervised grouping",
            "Supervised classification",
            "Reinforcement learning"
          ],
          answer: 0
        },
        {
          q: "What is training data?",
          options: [
            "Data used to teach the model",
            "Data used for final testing",
            "Data collected after deployment"
          ],
          answer: 0
        },
        {
          q: "What is overfitting?",
          options: [
            "Model learns training data too well",
            "Model underperforms",
            "Model doesn't learn at all"
          ],
          answer: 0
        },
        {
          q: "Which is NOT a type of machine learning?",
          options: [
            "Circular learning",
            "Supervised learning",
            "Reinforcement learning"
          ],
          answer: 0
        },
        {
          q: "What is a feature in ML?",
          options: [
            "Input variable",
            "Output variable",
            "Model parameter"
          ],
          answer: 0
        },
        {
          q: "What does accuracy measure?",
          options: [
            "Correct predictions / Total predictions",
            "Total predictions",
            "Model training time"
          ],
          answer: 0
        },
        {
          q: "Which is an unsupervised learning algorithm?",
          options: [
            "K-Means clustering",
            "Linear regression",
            "Logistic regression"
          ],
          answer: 0
        }
      ]
    }
  ],
  "lawyer": [
    {
      title: "Legal System Fundamentals",
      video: "https://www.youtube.com/embed/dMnqtRtd7F4",
      pdf: legalFundPdf,
      notes: "Overview of Indian legal system, constitution, judiciary structure.",
      questions: [
        {
          q: "Who is the head of the Indian Judiciary?",
          options: [
            "Prime Minister",
            "Chief Justice of India",
            "President"
          ],
          answer: 1
        },
        {
          q: "How many schedules are there in the Indian Constitution?",
          options: ["10", "12", "15"],
          answer: 1
        },
        {
          q: "Which article deals with the Supreme Court of India?",
          options: ["Article 124", "Article 32", "Article 21"],
          answer: 0
        },
        {
          q: "The concept of 'Basic Structure' of the Constitution was established in which case?",
          options: ["Kesavananda Bharati case", "Maneka Gandhi case", "Golaknath case"],
          answer: 0
        },
        {
          q: "What is the retirement age of a Supreme Court judge?",
          options: ["62 years", "65 years", "70 years"],
          answer: 1
        },
        {
          q: "Which part of the Constitution deals with Fundamental Rights?",
          options: ["Part III", "Part IV", "Part II"],
          answer: 0
        },
        {
          q: "The High Court has the power to issue writs under which article?",
          options: ["Article 226", "Article 32", "Article 136"],
          answer: 0
        },
        {
          q: "Who appoints the judges of the Supreme Court?",
          options: ["President", "Prime Minister", "Chief Justice"],
          answer: 0
        },
        {
          q: "The doctrine of 'Separation of Powers' is implicit under which article?",
          options: ["Article 50", "Article 14", "Article 21"],
          answer: 0
        },
        {
          q: "Which schedule contains the list of languages recognized by the Constitution?",
          options: ["Eighth Schedule", "Seventh Schedule", "Ninth Schedule"],
          answer: 0
        }
      ]
    },

    {
      title: "Criminal & Civil Law",
      video: "https://www.youtube.com/embed/bmZx9xaQHoU",
      pdf: criminalPdf,
      notes: "Indian Penal Code (IPC), Criminal Procedure Code (CrPC), civil law basics.",
      questions: [
        {
          q: "IPC is related to?",
          options: [
            "Criminal law",
            "Civil disputes",
            "Taxation"
          ],
          answer: 0
        },
        {
          q: "Which section of IPC defines murder?",
          options: ["Section 300", "Section 302", "Section 304"],
          answer: 0
        },
        {
          q: "What does CrPC stand for?",
          options: [
            "Criminal Procedure Code",
            "Civil Procedure Code",
            "Criminal Practice Code"
          ],
          answer: 0
        },
        {
          q: "Under which section of IPC is 'theft' defined?",
          options: ["Section 378", "Section 379", "Section 380"],
          answer: 0
        },
        {
          q: "What is the punishment for defamation under IPC?",
          options: [
            "Simple imprisonment up to 2 years or fine",
            "Life imprisonment",
            "Death penalty"
          ],
          answer: 0
        },
        {
          q: "Which code deals with civil procedures in India?",
          options: ["CPC", "CrPC", "IPC"],
          answer: 0
        },
        {
          q: "The term 'res judicata' means?",
          options: [
            "A matter already judged",
            "New evidence",
            "Pending case"
          ],
          answer: 0
        },
        {
          q: "Under which section of IPC is 'robbery' defined?",
          options: ["Section 390", "Section 391", "Section 392"],
          answer: 0
        },
        {
          q: "What is the standard of proof in criminal cases?",
          options: [
            "Beyond reasonable doubt",
            "Preponderance of probabilities",
            "Prima facie"
          ],
          answer: 0
        },
        {
          q: "Which court handles matrimonial disputes?",
          options: ["Family Court", "Criminal Court", "High Court only"],
          answer: 0
        }
      ]
    },

    {
      title: "Corporate & Cyber Law",
      video: "https://www.youtube.com/embed/D89uKibgPdE",
      pdf: corporateLawPdf,
      notes: "Companies Act, IT Act, cyber crimes, compliance rules.",
      questions: [
        {
          q: "Cyber law mainly deals with?",
          options: [
            "Online crimes and data protection",
            "Property law",
            "Family law"
          ],
          answer: 0
        },
        {
          q: "Which act governs companies in India?",
          options: [
            "Companies Act, 2013",
            "Partnership Act",
            "Contract Act"
          ],
          answer: 0
        },
        {
          q: "What is the punishment for cyber terrorism under IT Act?",
          options: [
            "Imprisonment up to life",
            "Fine only",
            "Community service"
          ],
          answer: 0
        },
        {
          q: "Under Companies Act, what is OPC?",
          options: [
            "One Person Company",
            "Official Public Company",
            "Open Private Corporation"
          ],
          answer: 0
        },
        {
          q: "Which section of IT Act deals with hacking?",
          options: ["Section 66", "Section 43", "Section 72"],
          answer: 0
        },
        {
          q: "What is DIN in company law?",
          options: [
            "Director Identification Number",
            "Document Identification Number",
            "Digital Identity Number"
          ],
          answer: 0
        },
        {
          q: "Data protection in India is primarily governed by?",
          options: ["IT Act, 2000", "Companies Act", "Contract Act"],
          answer: 0
        },
        {
          q: "What is the maximum penalty for data breach under IT Act?",
          options: [
            "Rs. 5 crore",
            "Rs. 1 crore",
            "Rs. 10 lakh"
          ],
          answer: 0
        },
        {
          q: "MCA stands for?",
          options: [
            "Ministry of Corporate Affairs",
            "Ministry of Company Administration",
            "Major Corporate Authority"
          ],
          answer: 0
        },
        {
          q: "Phishing comes under which type of cyber crime?",
          options: [
            "Financial fraud",
            "Physical theft",
            "Property dispute"
          ],
          answer: 0
        }
      ]
    },

    {
      title: "Legal Drafting & Research",
      video: "https://www.youtube.com/embed/G3m6YcY8f8Y",
      pdf: draftingPdf,
      notes: "Legal writing, contracts, petitions, legal research methods.",
      questions: [
        {
          q: "Legal drafting is used for?",
          options: [
            "Writing legal documents",
            "Programming",
            "Designing websites"
          ],
          answer: 0
        },
        {
          q: "Which is an essential part of a contract?",
          options: [
            "Offer and Acceptance",
            "Color of ink",
            "Page number"
          ],
          answer: 0
        },
        {
          q: "What is a plaint?",
          options: [
            "A legal document filed by plaintiff",
            "A court judgment",
            "A witness statement"
          ],
          answer: 0
        },
        {
          q: "Which research tool is commonly used for legal research in India?",
          options: [
            "SCC Online",
            "Google only",
            "Wikipedia"
          ],
          answer: 0
        },
        {
          q: "What does 'affidavit' mean?",
          options: [
            "Sworn written statement",
            "Oral testimony",
            "Court order"
          ],
          answer: 0
        },
        {
          q: "Which is NOT a valid contract?",
          options: [
            "Oral agreement for fraud",
            "Written business deal",
            "Online terms acceptance"
          ],
          answer: 0
        },
        {
          q: "What is the purpose of a non-disclosure agreement?",
          options: [
            "Protect confidential information",
            "Transfer property",
            "Hire employees"
          ],
          answer: 0
        },
        {
          q: "Which court uses a 'writ petition'?",
          options: [
            "High Court and Supreme Court",
            "Only District Court",
            "Only Family Court"
          ],
          answer: 0
        },
        {
          q: "What is 'citation' in legal research?",
          options: [
            "Reference to legal authority",
            "Court summons",
            "Police complaint"
          ],
          answer: 0
        },
        {
          q: "Which is essential in legal drafting?",
          options: [
            "Clear and precise language",
            "Poetic expressions",
            "Technical jargon only"
          ],
          answer: 0
        }
      ]
    }
  ]

};

/* =====================
   COMPONENT
===================== */

// export default function ModuleDetails() {
//   const { role, moduleIndex } = useParams();

//   const index = parseInt(moduleIndex, 10);
//   const module = moduleData[role]?.[index];

//   const [activeTab, setActiveTab] = useState("video");
//   const [score, setScore] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const savedProgress = localStorage.getItem(`${role}-${index}-progress`);
//     if (savedProgress) setProgress(Number(savedProgress));
//   }, [role, index]);

//   if (!module) {
//     return (
//       <div style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
//         <h2>Module not found</h2>
//       </div>
//     );
//   }

//   // const handleSubmitTest = () => {
//   //   let correct = 0;
//   //   module.questions.forEach((q, i) => {
//   //     if (answers[i] === q.answer) correct++;
//   //   });

//   //   setScore(correct);
//   //   setProgress(100);
//   //   localStorage.setItem(`${role}-${index}-progress`, 100);
//   // };


//     const handleSubmitTest = async () => {
//     let correct = 0;

//     module.questions.forEach((q, i) => {
//       if (answers[i] === q.answer) correct++;
//     });

//     setScore(correct);
//     setProgress(100);

//     localStorage.setItem(`${role}-${moduleIndex}-progress`, 100);

//     const username = localStorage.getItem("username");

//     const verdict = correct >= 1 ? "Eligible" : "Not Eligible";

//     // 🔥 SAVE INTO MONGODB
//     await fetch("http://localhost:5000/api/saveResult", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         role,
//         module: module.title,
//         score,
//       }),
//     });
//   };

//   // if (!module) return <h2 style={{ color: "white" }}>Module Not Found</h2>;

//   return (
//     <div style={{ minHeight: "100vh", background: "#0b0b0b", color: "white" }}>
//       <Container className="py-5">
//         <h2 className="text-warning mb-4">{module.title}</h2>

//         <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

//         <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>

//           <Tab eventKey="video" title="Video">
//             <div className="mt-4 text-center">
//               <iframe
//                 width="80%"
//                 height="400"
//                 src={module.video}
//                 title="Module Video"
//                 allowFullScreen
//                 style={{ borderRadius: "10px" }}
//               />
//             </div>
//           </Tab>

//           <Tab eventKey="notes" title="Notes">
//             <div className="mt-4">
//               {module.pdf ? (
//                 <>
//                   <iframe
//                     src={module.pdf}
//                     width="100%"
//                     height="600px"
//                     title="Module PDF"
//                     style={{ border: "none", borderRadius: "10px" }}
//                   />
//                   <div className="text-center mt-3">
//                     <Button variant="outline-warning" href={module.pdf} target="_blank">
//                       Download PDF
//                     </Button>
//                   </div>
//                 </>
//               ) : (
//                 <Card className="mt-4 p-4 bg-dark text-white">
//                   {module.notes}
//                 </Card>
//               )}
//             </div>
//           </Tab>

//           <Tab eventKey="test" title="Mock Test">
//             <div className="mt-4">
//               {module.questions.map((q, qi) => (
//                 <Card key={qi} className="mb-3 p-3 bg-dark text-white">
//                   <h6>{q.q}</h6>
//                   {q.options.map((opt, oi) => (
//                     <div key={oi}>
//                       <input
//                         type="radio"
//                         name={`q${qi}`}
//                         checked={answers[qi] === oi}
//                         onChange={() => {
//                           const updated = [...answers];
//                           updated[qi] = oi;
//                           setAnswers(updated);
//                         }}
//                       />{" "}
//                       {opt}
//                     </div>
//                   ))}
//                 </Card>
//               ))}

//               <Button variant="warning" onClick={handleSubmitTest}>

//                 Submit Test
//               </Button>

//               {score !== null && (
//                 <h4 className="mt-3 text-success">
//                   Score: {score}/{module.questions.length}
//                 </h4>
//               )}
//             </div>
//           </Tab>

//         </Tabs>
//       </Container>
//     </div>
//   );
// }
export default function ModuleDetails() {
  const { role, moduleIndex } = useParams();

  const index = parseInt(moduleIndex, 10);
  const module = moduleData[role]?.[index];

  const [activeTab, setActiveTab] = useState("video");
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  // Watch Time State
  const [seconds, setSeconds] = useState(0);

  const email = localStorage.getItem("email");

  // 1. Load initial progress from DB
  useEffect(() => {
    if (!email) return;

    // Fetch existing progress
    fetch(`http://localhost:5000/api/getProgress/${email}`)
      .then(res => res.json())
      .then(data => {
        const currentModuleProgress = data.find(p => p.role === role && p.module === module?.title);
        if (currentModuleProgress) {
          if (currentModuleProgress.watchTime) setSeconds(currentModuleProgress.watchTime);
          if (currentModuleProgress.score) setScore(currentModuleProgress.score);
          // Basic progress calc: if score > 0 or watchTime > 60, assume some progress
          if (currentModuleProgress.score > 0) setProgress(100);
        }
      })
      .catch(err => console.log("Error fetching progress", err));

    // Initialize module in DB if not exists (using the fixed saveDetails endpoint)
    if (module?.title) {
      saveModule(module.title);
    }
  }, [role, index, email, module]);

  // 2. Timer to track watch time
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 3. Auto-save watch time every 30 seconds
  useEffect(() => {
    if (!email) return;
    if (seconds > 0 && seconds % 30 === 0) {
      saveProgressToDB(seconds, score);
    }
  }, [seconds, email, score]);

  // Save changes when unmounting
  useEffect(() => {
    return () => {
      if (email && seconds > 0) {
        saveProgressToDB(seconds, score);
      }
    }
  }, [seconds, score, email]);


  const saveProgressToDB = (currentSeconds, currentScore) => {
    if (!email || !module) return;

    fetch("http://localhost:5000/api/updateProgress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        role,
        module: module.title,
        watchTime: currentSeconds,
        score: currentScore || 0
      })
    }).catch(err => console.log("Save error", err));
  };


  /* ================= SAVE MODULE ================= */

  const saveModule = async (moduleName) => {
    if (!email) return;

    await fetch("http://localhost:5000/api/saveDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        role,
        module: moduleName,
      }),
    });
  };

  /* ================= TEST SUBMIT ================= */

  const handleSubmitTest = async () => {
    let correct = 0;
    module.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });

    const calculatedScore = Math.round((correct / module.questions.length) * 100);
    setScore(calculatedScore);
    setProgress(100);

    // Immediately save result
    saveProgressToDB(seconds, calculatedScore);

    alert(`Test Submitted! You scored ${calculatedScore}%`);
  };


  /* ================= UI ================= */

  if (!module) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
        <h2>Module not found</h2>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0b0b0b", color: "white" }}>
      <Container className="py-5">
        <h2 className="text-warning mb-4">{module.title}</h2>

        <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>

          {/* VIDEO TAB */}
          <Tab eventKey="video" title="Video">
            <div className="mt-4 text-center">
              <iframe
                width="80%"
                height="400"
                src={module.video}
                title="Module Video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              />
              <p className="mt-3 text-muted">Time Spent: {Math.floor(seconds / 60)}m {seconds % 60}s</p>
            </div>
          </Tab>

          {/* NOTES TAB */}
          <Tab eventKey="notes" title="Notes">
            <div className="mt-4">
              {module.pdf ? (
                <>
                  <iframe
                    src={module.pdf}
                    width="100%"
                    height="600px"
                    title="Module PDF"
                    style={{ border: "none", borderRadius: "10px" }}
                  />
                  <div className="text-center mt-3">
                    <Button variant="outline-warning" href={module.pdf} target="_blank">
                      Download PDF
                    </Button>
                  </div>
                </>
              ) : (
                <Card className="mt-4 p-4 bg-dark text-white">
                  {module.notes}
                </Card>
              )}
            </div>
          </Tab>

          {/* TEST TAB */}
          <Tab eventKey="test" title="Mock Test">
            <div className="mt-4">
              {module.questions.map((q, qi) => (
                <Card key={qi} className="mb-3 p-3 bg-dark text-white">
                  <h6>{q.q}</h6>
                  {q.options.map((opt, oi) => (
                    <div key={oi}>
                      <input
                        type="radio"
                        name={`q${qi}`}
                        checked={answers[qi] === oi}
                        onChange={() => {
                          // Use object for answers to support sparse arrays/check/uncheck properly if needed
                          const updated = { ...answers, [qi]: oi };
                          setAnswers(updated);
                        }}
                      />{" "}
                      {opt}
                    </div>
                  ))}
                </Card>
              ))}

              <Button variant="warning" onClick={handleSubmitTest}>
                Submit Test
              </Button>

              {score !== null && (
                <h4 className="mt-3 text-success">
                  Score: {score}%
                </h4>
              )}
            </div>
          </Tab>

        </Tabs>
      </Container>
    </div>
  );
}