import React, { useState } from "react";
import { Modal, Button, ProgressBar, Form } from "react-bootstrap";
import { calculateFootPrint } from "../services/CalculationService";
import "../css/calculator.css";

const CalculatorModal = ({ show, onHide }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const questions = ["House", "General Consumption", "General Consumption", "Transportation"];
  const [progressRate, setProgressRate] = useState(1);
  const [answers, setAnswers] = useState({
    house: { naturalGas: 0, coal: 0, electricity: 0 },
    generalConsumption1: {
      food: 0,
      diet: 1,
      // clothes: 0,
      paper: 0,},
      generalConsumption2:{
      electronics: 0,
      fun: 0,
      dressing: 0,
      paperProduct: 0,
    },
    transportation: {
      fuel: 0,
      publicTransport: 1,
      transportFrequency: 1,
    },
  });

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setProgressRate(progressRate - 1);
    console.log(currentQuestion);
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setProgressRate(progressRate + 1);
    console.log(currentQuestion);
  };

  const handleInputChange = (e, section, item) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [item]: value,
      },
    }));
  };

  const handleDropdownChange = (e, section, item) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [item]: value,
      },
    }));
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({
      house: { naturalGas: 0, coal: 0, electricity: 0 },
      generalConsumption1: {
        food: 0,
        diet: 0,
        // clothes: 0,
        paper: 0,},
        generalConsumption2:{
        electronics: 0,
        fun: 0,
        dressing: 0,
        paperProduct: 0,
      },
      transportation: { fuel: 0, publicTransport: 0 },
    });
    onHide();
  };

  const handleSubmit = async () => {
    console.log("Gönderilecek veriler:", answers);
    setCurrentQuestion(currentQuestion + 1);
    setProgressRate(1);
    var response = await calculateFootPrint(answers);
    setAnswer(response.data);
    console.log(response);
    
    // Diğer işlemler ve POST isteği burada gerçekleştirilir
    // ...
  };

  return (
    <Modal
      closeButton
      show={show}
      onHide={handleClose}
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{questions[currentQuestion]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProgressBar
          now={(progressRate / 4) * 100}
          label={`${progressRate}/4`}
        />
        {currentQuestion === 0 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to natural gas in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.house.naturalGas}
                onChange={(e) => handleInputChange(e, "house", "naturalGas")}
              />
            </div>
          </div>
        )}
        {currentQuestion === 0 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to coal in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.house.coal}
                onChange={(e) => handleInputChange(e, "house", "coal")}
              />
            </div>
          </div>
        )}
        {currentQuestion === 0 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to electricity in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.house.electricity}
                onChange={(e) => handleInputChange(e, "house", "electricity")}
              />
            </div>
          </div>
        )}
        {/* {currentQuestion === 1 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to clothes in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption1.clothes}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption1", "clothes")
                }
              />
            </div>
          </div>
        )} */}
        {currentQuestion === 1 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to paper products in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption1.paper}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption1", "paper")
                }
              />
            </div>
          </div>
        )}
        {currentQuestion === 1 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to food in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption1.food}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption1", "food")
                }
              />
            </div>
          </div>
        )}
        {currentQuestion === 1 && (
          <div className="question">
            <span className="calculator-text">What is your food diet preference?</span>
            <div className="answer">
              <Form.Select
                value={answers.generalConsumption1.diet}
                onChange={(e) => handleDropdownChange(e, "generalConsumption1", "diet")}
              >
                <option value="1">Vegan</option>
                <option value="2">Vegetarian</option>
                <option value="3">Pescatarian</option>
                <option value="4">Little Meat</option>
                <option value="5">Medium Meat</option>
                <option value="6">Hard Meat</option>
              </Form.Select>
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to electronics in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption2.electronics}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption2", "electronics")
                }
              />
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to fun in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption2.fun}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption2", "fun")
                }
              />
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to dressing in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption2.dressing}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption2", "dressing")
                }
              />
            </div>
          </div>
        )}
        {/* {currentQuestion === 2 && (
          <div className="question">
            <span className="calculator-text">Paper Product Tl</span>
            <div className="answer">
              <input
                type="number"
                value={answers.generalConsumption2.paperProduct}
                onChange={(e) =>
                  handleInputChange(e, "generalConsumption2", "paperProduct")
                }
              />
            </div>
          </div>
        )} */}
        
        {currentQuestion === 3 && (
          <div className="question">
            <span className="calculator-text">How much do you pay to fuel in a month?</span>
            <div className="answer">
              <input
                type="number"
                value={answers.transportation.fuel}
                onChange={(e) => handleInputChange(e, "transportation", "fuel")}
              />
            </div>
          </div>
        )}
        {/* {currentQuestion === 2 && (
          <div className="question">
            <span className="calculator-text">Question:</span>
            <span className="calculator-text">Public Transport</span>
            <div className="answer">
              <Form.Select
                value={answers.transportation.publicTransport}
                onChange={handleDropdownChange}
              >
                <option value="none">None</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="metro">Metro</option>
              </Form.Select>
            </div>
          </div>
        )} */}
        {currentQuestion === 3 && (
          <div className="question">
            {/* <span className="calculator-text">Question:</span> */}
            <span className="calculator-text">What is your transport frequency in a month</span>
            <div className="answer">
              <Form.Select
                value={answers.transportation.transportFrequency}
                onChange={(e) =>
                  handleInputChange(e, "transportation", "transportFrequency")
                }
              >
                <option value="1">Never</option>
                <option value="2">Rarely</option>
                <option value="3">Sometimes</option>
                <option value="4">Often</option>
                <option value="5">Always</option>
              </Form.Select>
            </div>
          </div>
        )}
        {currentQuestion === 4 && (
          <div className="result-screen">
            <h3 className="calculator-text">Result:</h3>
            <pre className="calculator-text">{answer/1000} ton</pre>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        {currentQuestion < 3 && (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentQuestion === 3 && (
          <Button variant="success" onClick={handleSubmit}>
            Finish
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CalculatorModal;
