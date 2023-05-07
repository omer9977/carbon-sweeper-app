import React, { useState } from 'react';
import '../css/calculator.css';
import { Modal, Button, ProgressBar } from 'react-bootstrap';

const CalculatorModal = ({ show, onHide }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            title: 'Transportation',
            items: [
                { label: 'Daily driving hours', min: 0, max: 10, step: 1 },
                { label: 'Daily money spent on public transport', min: 0, max: 100, step: 10 },
            ],
        },
        {
            title: 'Title 2',
            items: [
                { label: 'Question 3', min: 0, max: 1000, step: 100 },
                { label: 'Question 4', min: 0, max: 10000, step: 1000 },
            ],
        },
    ];

    const handlePrevious = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    };

    const handleNext = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };

    const handleInputChange = (e, index) => {
        const value = parseInt(e.target.value);
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = value;
            return updatedAnswers;
        });
    };

    const handleClose = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        onHide();
      };

    return (
        <Modal closeButton show={show} onHide={handleClose} className='custom-modal'>
            <Modal.Header closeButton>
                <Modal.Title>
                    {questions[currentQuestion].title}</Modal.Title>
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
                                type="range"
                                min={item.min}
                                max={item.max}
                                step={item.step}
                                value={answers[currentQuestion * questions[currentQuestion].items.length + index] || item.min}
                                onChange={(e) => handleInputChange(e, currentQuestion * questions[currentQuestion].items.length + index)}
                            />
                            <span>{answers[currentQuestion * questions[currentQuestion].items.length + index]}</span>
                        </div>
                    </div>
                ))}
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
