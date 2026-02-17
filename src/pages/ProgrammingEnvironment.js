import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { FaPlay, FaTrash, FaPython, FaCopy, FaSave } from 'react-icons/fa';

const ProgrammingEnvironment = () => {
  const [code, setCode] = useState(`# Welcome to Python Environment
print("Hello, World!")

# Try some Python code:
name = "Student"
print(f"Welcome {name} to Placement Readiness Portal!")

# You can do calculations
for i in range(5):
    print(f"Square of {i} is {i*i}")

# Create a function
def greet(person):
    return f"Hello, {person}!"

print(greet("Python Learner"))
`);
  
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Load Pyodide when component mounts
  useEffect(() => {
    async function loadPyodide() {
      try {
        setIsLoading(true);
        
        // Load Pyodide script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        script.async = true;
        
        script.onload = async () => {
          try {
            // Initialize Pyodide
            const pyodideInstance = await window.loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
            });
            
            setPyodide(pyodideInstance);
            setIsLoading(false);
          } catch (error) {
            setLoadError('Failed to initialize Python. Please refresh.');
            setIsLoading(false);
            console.error('Pyodide init error:', error);
          }
        };
        
        script.onerror = () => {
          setLoadError('Failed to load Python. Check your internet connection.');
          setIsLoading(false);
        };
        
        document.body.appendChild(script);
        
        return () => {
          document.body.removeChild(script);
        };
      } catch (error) {
        setLoadError('Unexpected error loading Python environment');
        setIsLoading(false);
      }
    }
    
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Python environment still loading...');
      return;
    }

    setIsRunning(true);
    setOutput('');

    try {
      // Clear any previous output and set up new stdout capture
      pyodide.runPython(`
import sys
from io import StringIO

# Store the original stdout
sys.stdout = StringIO()
      `);

      // Run the user's code
      await pyodide.runPythonAsync(code);

      // Get the captured output
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      
      // Restore stdout
      pyodide.runPython('sys.stdout = sys.__stdout__');
      
      setOutput(stdout || 'Code executed successfully (no output)');
    } catch (error) {
      // If there's a Python error, restore stdout and show the error
      pyodide.runPython('sys.stdout = sys.__stdout__');
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const clearCode = () => {
    setCode('# Write your Python code here\nprint("Hello, World!")\n');
    setOutput('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  const saveCode = () => {
    localStorage.setItem('savedPythonCode', code);
    alert('Code saved to browser!');
  };

  const loadSavedCode = () => {
    const saved = localStorage.getItem('savedPythonCode');
    if (saved) {
      setCode(saved);
      setOutput('');
    } else {
      alert('No saved code found');
    }
  };

  const examples = {
    calculator: `# Basic Calculator
a = 10
b = 5
print(f"Sum: {a + b}")
print(f"Difference: {a - b}")
print(f"Product: {a * b}")
print(f"Division: {a / b}")
print(f"Integer Division: {a // b}")
print(f"Modulus: {a % b}")`,
    
    dataStructures: `# Lists and Dictionaries
# List operations
fruits = ["apple", "banana", "orange", "mango"]
print("Fruits:", fruits)
fruits.append("grape")
print("After append:", fruits)

# List comprehension
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)

# Dictionary example
student = {
    "name": "John",
    "age": 20,
    "subjects": ["Math", "Physics", "CS"]
}
print("\\nStudent:", student)

# Loop through dictionary
for key, value in student.items():
    print(f"{key}: {value}")`,
    
    functions: `# Functions
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

print(f"Factorial of 5: {factorial(5)}")
print(f"Factorial of 7: {factorial(7)}")

print("\\nPrime numbers up to 20:")
for i in range(20):
    if is_prime(i):
        print(f"{i} is prime")`,
    
    fileHandling: `# File Handling
# Create sample data
data = """Name,Age,City
Alice,25,New York
Bob,30,London
Charlie,35,Tokyo"""

# Write to file
with open('sample.txt', 'w') as f:
    f.write(data)

print("File created successfully!")

# Read from file
with open('sample.txt', 'r') as f:
    content = f.read()
    print("\\nFile contents:")
    print(content)

# List all files
import os
print("\\nFiles in directory:", os.listdir('.'))`,
    
    classes: `# Classes and Objects
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def __str__(self):
        return f"{self.name} (age {self.age}) - Average: {self.average():.2f}"

# Create students
s1 = Student("Alice", 20)
s1.add_grade(85)
s1.add_grade(92)
s1.add_grade(88)

s2 = Student("Bob", 22)
s2.add_grade(78)
s2.add_grade(81)

print(s1)
print(s2)`,
    
    numpyExample: `# NumPy Example (if installed)
try:
    import numpy as np
    arr = np.array([1, 2, 3, 4, 5])
    print("Array:", arr)
    print("Mean:", np.mean(arr))
    print("Sum:", np.sum(arr))
except ImportError:
    print("NumPy not available. Install with: micropip.install('numpy')")`
  };

  const loadExample = (exampleKey) => {
    setCode(examples[exampleKey]);
    setOutput('');
  };

  if (loadError) {
    return (
      <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
        <Container className="py-5">
          <Alert variant="danger">
            <Alert.Heading>Error Loading Python Environment</Alert.Heading>
            <p>{loadError}</p>
            <Button variant="outline-danger" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div className="bg-primary py-4 text-center" style={{ background: 'linear-gradient(120deg, #667eea, #764ba2)' }}>
        <Container>
          <h1 className="fw-bold display-6">
            <FaPython className="me-3" />
            Interactive Python Environment
          </h1>
          <p className="mt-2 opacity-75">
            {isLoading ? 'Loading Python...' : 'Write, run, and test Python code in your browser'}
          </p>
        </Container>
      </div>

      <Container className="py-4">
        {isLoading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="info" style={{ width: '3rem', height: '3rem' }} />
            <p className="mt-3 text-white-50">Loading Python environment... This may take a few seconds.</p>
          </div>
        ) : (
          <>
            {/* Examples Row */}
            <Row className="mb-4">
              <Col>
                <Card className="bg-dark border-secondary">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="text-white-50 mb-0">Quick Examples:</h6>
                      <div>
                        <Button variant="outline-light" size="sm" onClick={loadSavedCode} className="me-2">
                          <FaSave className="me-1" /> Load Saved
                        </Button>
                        <Button variant="outline-success" size="sm" onClick={saveCode}>
                          <FaSave className="me-1" /> Save Code
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('calculator')}>
                        Calculator
                      </Button>
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('dataStructures')}>
                        Data Structures
                      </Button>
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('functions')}>
                        Functions
                      </Button>
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('fileHandling')}>
                        File Handling
                      </Button>
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('classes')}>
                        Classes & OOP
                      </Button>
                      <Button variant="outline-info" size="sm" onClick={() => loadExample('numpyExample')}>
                        NumPy
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="g-4">
              {/* Code Editor Column */}
              <Col lg={7}>
                <Card className="bg-dark border-secondary">
                  <Card.Header className="bg-dark border-secondary d-flex justify-content-between align-items-center">
                    <span className="text-white">
                      <FaPython className="me-2 text-info" />
                      Python Editor
                    </span>
                    <div>
                      <Button 
                        variant="success" 
                        size="sm" 
                        className="me-2"
                        onClick={runCode}
                        disabled={isRunning}
                      >
                        <FaPlay className="me-1" /> {isRunning ? 'Running...' : 'Run'}
                      </Button>
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={clearCode}
                      >
                        <FaTrash className="me-1" /> Clear
                      </Button>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Form.Control
                      as="textarea"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      style={{
                        minHeight: '450px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        backgroundColor: '#1e1e2f',
                        color: '#fff',
                        border: '1px solid #444',
                        lineHeight: '1.5'
                      }}
                      className="p-3"
                      spellCheck="false"
                    />
                  </Card.Body>
                </Card>
              </Col>

              {/* Output Column */}
              <Col lg={5}>
                <Card className="bg-dark border-secondary h-100">
                  <Card.Header className="bg-dark border-secondary d-flex justify-content-between align-items-center">
                    <span className="text-white">Output</span>
                    {output && (
                      <Button variant="outline-light" size="sm" onClick={copyToClipboard}>
                        <FaCopy /> Copy
                      </Button>
                    )}
                  </Card.Header>
                  <Card.Body>
                    <pre
                      style={{
                        minHeight: '400px',
                        maxHeight: '400px',
                        overflowY: 'auto',
                        backgroundColor: '#1e1e2f',
                        color: output.toLowerCase().includes('error') ? '#ff6b6b' : '#0f0',
                        padding: '15px',
                        borderRadius: '8px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word'
                      }}
                    >
                      {output || (
                        <span className="text-white-50">
                          Click Run to execute your code...
                        </span>
                      )}
                    </pre>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Features Info */}
            <Row className="mt-4">
              <Col>
                <Card className="bg-dark border-secondary">
                  <Card.Body>
                    <div className="d-flex justify-content-between text-white-50 small flex-wrap">
                      <span className="text-info me-3">✨ Supports Python 3.10+</span>
                      <span className="text-warning me-3">⚠️ No threading/multiprocessing</span>
                      <span className="text-success me-3">⚡ Runs 100% in your browser</span>
                      <span className="text-info">📦 Install packages with micropip</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Package Installation Example */}
            <Row className="mt-3">
              <Col>
                <Card className="bg-dark border-secondary">
                  <Card.Body className="py-2">
                    <small className="text-white-50">
                      <strong>💡 To install packages:</strong> Run this code first: 
                      <code className="mx-2 text-info">import micropip; await micropip.install('package-name')</code>
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProgrammingEnvironment;