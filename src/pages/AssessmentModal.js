// AssessmentModal.js
import React, { useState } from 'react';
import { Modal, Button, ProgressBar, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { assessmentQuestions, roleDescriptions } from '../pages/assessmentQuestions';

const AssessmentModal = ({ show, onHide }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedRole, setRecommendedRole] = useState(null);

  const handleAnswer = (selectedOptions) => {
    const newAnswers = [...answers, selectedOptions];
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult([...newAnswers]);
    }
  };

  const calculateResult = (allAnswers) => {
    // Count role occurrences
    const roleCount = {};
    
    allAnswers.forEach(answer => {
      answer.roles.forEach(role => {
        roleCount[role] = (roleCount[role] || 0) + 1;
      });
    });

    // Find the role with highest count
    let maxCount = 0;
    let topRole = null;
    
    Object.entries(roleCount).forEach(([role, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topRole = role;
      }
    });

    setRecommendedRole(topRole);
    setShowResult(true);
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendedRole(null);
  };

  const handleClose = () => {
    restartAssessment();
    onHide();
  };

  const handleViewModules = () => {
    onHide();
    // Navigate to the specific role's modules page
    // This matches the route pattern in your Modules.js component
    navigate(`/modules/${recommendedRole}`);
  };

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      size="lg"
      centered
      backdrop="static"
      className="assessment-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0 bg-dark text-white">
        <Modal.Title className="w-100 text-center">
          {!showResult ? (
            <div>
              <h4 className="fw-bold mb-0 text-white">Career Assessment</h4>
              <p className="text-white-50 small mt-2 mb-0">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </p>
            </div>
          ) : (
            <h4 className="fw-bold text-white">Your Personalized Result</h4>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 py-4 bg-dark text-white">
        {!showResult ? (
          <>
            <ProgressBar 
              now={progress} 
              className="mb-4" 
              variant="info"
              style={{ height: '8px', borderRadius: '10px' }}
            />
            
            <div>
              <h5 className="mb-4 fw-semibold text-white">
                {assessmentQuestions[currentQuestion].question}
              </h5>

              <div className="d-flex flex-column gap-3">
                {assessmentQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline-light"
                    className="text-start p-3 rounded-3 w-100"
                    onClick={() => handleAnswer(option)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            {recommendedRole && (
              <>
                <div className="display-1 mb-3">
                  {roleDescriptions[recommendedRole]?.icon}
                </div>
                
                <h3 className="fw-bold mb-3 text-info">
                  {roleDescriptions[recommendedRole]?.title}
                </h3>
                
                <p className="lead mb-4 text-white-50">
                  {roleDescriptions[recommendedRole]?.matchPhrase}
                </p>
                
                <div className="bg-secondary bg-opacity-25 p-4 rounded-4 mb-4">
                  <p className="mb-0 text-white-75">
                    {roleDescriptions[recommendedRole]?.description}
                  </p>
                </div>

                <Row className="g-3 justify-content-center">
                  <Col xs={12} sm="auto">
                    <Button 
                      variant="outline-light" 
                      onClick={restartAssessment}
                      className="rounded-pill px-4 py-2"
                    >
                      Retake Assessment
                    </Button>
                  </Col>
                  
                  <Col xs={12} sm="auto">
                    <Button 
                      variant="info" 
                      onClick={handleViewModules}
                      className="rounded-pill px-4 py-2 text-white"
                    >
                      View {roleDescriptions[recommendedRole]?.title} Modules
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AssessmentModal;