import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Accordion, Badge } from "react-bootstrap";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

// Sample question data per company
const companyQuestions = {
  google: {
    name: "Google",
    applyLink: "https://careers.google.com/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "If the probability of rain on any given day is 0.3, what is the probability that it rains on exactly 2 out of 5 days?",
          "A train 120m long passes a pole in 12 seconds. What is its speed in km/h?",
          "Find the missing number: 2, 6, 12, 20, ?"
        ]
      },
      {
        category: "DSA",
        items: [
          "Implement an LRU cache.",
          "Find the longest palindromic substring in a given string.",
          "Given an array of integers, return indices of two numbers that add up to a target."
        ]
      },
      {
        category: "System Design",
        items: [
          "Design a URL shortening service like TinyURL.",
          "Design Google Search autocomplete."
        ]
      }
    ]
  },
  microsoft: {
    name: "Microsoft",
    applyLink: "https://careers.microsoft.com/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "If 5 workers can build a wall in 10 days, how many days will 8 workers take?",
          "What is the next number: 7, 10, 8, 11, 9, 12, ?",
          "A shopkeeper sells an item at 20% profit. If cost price is ₹500, what is selling price?"
        ]
      },
      {
        category: "DSA",
        items: [
          "Reverse a linked list in groups of size k.",
          "Find the median of two sorted arrays.",
          "Check if a binary tree is a binary search tree."
        ]
      },
      {
        category: "OS",
        items: [
          "Explain deadlock and its necessary conditions.",
          "What is virtual memory? How does paging work?"
        ]
      }
    ]
  },
  amazon: {
    name: "Amazon",
    applyLink: "https://www.amazon.jobs/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "A can do a piece of work in 10 days, B in 15 days. How long will they take together?",
          "Find the odd one out: 3, 5, 7, 11, 13, 17, 19, 23",
          "If log2 = 0.3010, what is log5?"
        ]
      },
      {
        category: "DSA",
        items: [
          "Implement a function to check if a string is a valid palindrome.",
          "Find the maximum sum subarray (Kadane's algorithm).",
          "Design an algorithm to merge k sorted lists."
        ]
      },
      {
        category: "Leadership Principles",
        items: [
          "Tell me about a time you disagreed with your manager.",
          "Give an example of a difficult problem you solved."
        ]
      }
    ]
  },
  meta: {
    name: "Meta",
    applyLink: "https://www.metacareers.com/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "If x + 1/x = 3, find x² + 1/x².",
          "A man walks 10 km north, then 5 km east. How far is he from start?",
          "What is the next number: 1, 1, 2, 3, 5, 8, ?"
        ]
      },
      {
        category: "DSA",
        items: [
          "Clone a graph.",
          "Find all combinations of a string that are palindromes.",
          "Design a recommendation system for friends."
        ]
      },
      {
        category: "Frontend",
        items: [
          "Explain the virtual DOM and how React uses it.",
          "How would you optimize a React component that re-renders too often?"
        ]
      }
    ]
  },
  apple: {
    name: "Apple",
    applyLink: "https://www.apple.com/careers/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "A car covers a distance of 200 km in 4 hours. What is its speed?",
          "Find the area of a circle with radius 7 cm.",
          "If 3x + 2y = 13 and 2x + 3y = 12, find x + y."
        ]
      },
      {
        category: "DSA",
        items: [
          "Implement a function to reverse a string in Swift.",
          "Find the lowest common ancestor in a binary tree.",
          "Design a cache with expiration time."
        ]
      },
      {
        category: "Hardware",
        items: [
          "Explain the difference between RAM and ROM.",
          "How does a CPU execute instructions?"
        ]
      }
    ]
  },
  netflix: {
    name: "Netflix",
    applyLink: "https://jobs.netflix.com/",
    questions: [
      {
        category: "Aptitude",
        items: [
          "A movie ticket costs $12. If 150 tickets are sold per day, what is daily revenue?",
          "If a streaming service has 10 million subscribers and each watches 2 hours daily, total watch time per day?",
          "A bag contains 4 red, 3 blue, 5 green balls. Probability of drawing a red ball?"
        ]
      },
      {
        category: "DSA",
        items: [
          "Design a recommendation algorithm based on user history.",
          "Find the top k frequently watched movies.",
          "Implement a rate limiter for API calls."
        ]
      },
      {
        category: "System Design",
        items: [
          "Design Netflix's video streaming architecture.",
          "How would you handle millions of concurrent users?"
        ]
      }
    ]
  }
};

const CompanyDetails = () => {
  const { companyId } = useParams();
  const company = companyQuestions[companyId];

  if (!company) {
    return (
      <div className="bg-dark text-white text-center py-5" style={{ minHeight: "100vh" }}>
        <h2>Company not found</h2>
        <Button as={Link} to="/companies" variant="primary">Back to Companies</Button>
      </div>
    );
  }

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>
      {/* Header with back button */}
      <Container className="py-4">
        <Button as={Link} to="/companies" variant="outline-light" className="mb-4">
          <FaArrowLeft className="me-2" /> Back to Companies
        </Button>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold text-warning">{company.name} Preparation</h1>
          <Button href={company.applyLink} target="_blank" variant="success" size="lg">
            Apply Now <FaExternalLinkAlt className="ms-2" />
          </Button>
        </div>
        <p className="text-white-50">Practice curated questions to crack {company.name} interviews</p>
      </Container>

      <Container className="pb-5">
        <Accordion defaultActiveKey="0" alwaysOpen>
          {company.questions.map((section, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx} className="bg-dark text-white border-secondary mb-3">
              <Accordion.Header>
                <Badge bg="info" className="me-3">{section.category}</Badge>
                <span className="fw-bold">{section.category} Questions</span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  {section.items.map((q, i) => (
                    <li key={i} className="mb-3 p-3" style={{ background: "#1e1e2e", borderRadius: "10px" }}>
                      <span className="text-warning me-2">Q{i+1}:</span> {q}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Additional resources note */}
        <Card className="bg-dark text-white border-info mt-4">
          <Card.Body>
            <Card.Title>💡 Practice Tips</Card.Title>
            <Card.Text>
              These are sample questions. For comprehensive preparation, use online judges like LeetCode, HackerRank, and company-specific forums.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CompanyDetails;