import React, { useState } from 'react';
import '../css/calculator.css';
import { Modal, Button, ProgressBar, Form } from 'react-bootstrap';

const CalculatorModal = ({ show, onHide }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    house: { naturalGas: '', coal: '', electricity: '' },
    generalConsumption: { food: '', diet: '1', clothes: '', paper: '', electronics: '', fun: '' },
    transportation: { fuel: '', publicTransport: 'none' },
  });

  const questions = [
    {
      title: 'House',
      items: [
        { label: 'Natural Gas' },
        { label: 'Coal' },
        { label: 'Electricity' },
      ],
    },
    {
      title: 'General Consumption',
      items: [
        { label: 'Clothes' },
        { label: 'Paper Products' },
        { label: 'Electronics' },
        { label: 'Fun' },
      ],
    },
    {
      title: 'Transportation',
      items: [
        { label: 'Fuel' },
      ],
    },
    {
        title: 'Food',
        items: [
          { label: 'Cost' },
        ],
      },
  ];

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleInputChange = (e, section, itemIndex) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [questions[currentQuestion].items[itemIndex].label.toLowerCase()]: value,
      },
    }));
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      transportation: {
        ...prevAnswers.transportation,
        publicTransport: value,
      },
    }));
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({
      house: { naturalGas: '', coal: '', electricity: '' },
      generalConsumption: { food: '', clothes: '', paper: '', electronics: '', fun: '' },
      transportation: { fuel: '', publicTransport: 'none' },
    });
    onHide();
  };

  return (
    <Modal closeButton show={show} onHide={handleClose} className='custom-modal'>
      <Modal.Header closeButton>
        <Modal.Title>{questions[currentQuestion].title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProgressBar now={(currentQuestion / questions.length) * 100} label={`${currentQuestion + 1}/${questions.length}`} />
        {questions[currentQuestion].items.map((item, index) => (
          <div className="question" key={index}>
            <span>Question:</span>
            <span>{item.label}</span>
            <div className="answer">
              <span>Answer:</span>
                <input
                  type="text"
                  value={answers[questions[currentQuestion].title.toLowerCase()][item.label.toLowerCase()]}
                  onChange={(e) => handleInputChange(e, questions[currentQuestion].title.toLowerCase(), index)}
                />
            </div>
          </div>
        ))}
        {questions[currentQuestion].title === 'Transportation' && (
          <div className="question">
            <span>Question:</span>
            <span>Public Transport</span>
            <div className="answer">
              <span>Answer:</span>
              <Form.Select value={answers.transportation.publicTransport} onChange={handleDropdownChange}>
                <option value="1">Never</option>
                <option value="2">Sometimes</option>
                <option value="3">Often</option>
                <option value="4">Frequently</option>
                <option value="5">Always</option>
              </Form.Select>
            </div>
          </div>
        )}
        {questions[currentQuestion].title === 'Food' && (
          <div className="question">
            <span>Question:</span>
            <span>Public Transport</span>
            <div className="answer">
              <span>Answer:</span>
              <Form.Select value={answers.generalConsumption.diet} onChange={handleDropdownChange}>
                <option value="1">Vegan</option>
                <option value="2">Vegeterian</option>
                <option value="3">Pescetarian</option>
                <option value="4">Low Meat</option>
                <option value="5">Medium Meat</option>
                <option value="6">High Meat</option>
              </Form.Select>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </Button>
        {currentQuestion < questions.length - 1 && (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentQuestion === questions.length - 1 && (
          <Button variant="success" onClick={onHide}>
            Finish
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CalculatorModal;