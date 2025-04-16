import React, { useState } from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  let answerElement;
if (isOpen) {
  answerElement = <p className="faq-answer">{answer}</p>;
  
}

/**
 * <div className="faq-item">
            <div className="faq-btn">
              <h5 className="faq-question">
                What is Frontend Mentor, and how will it help me?
              </h5>
              <button>
                <img src={plusIcon} alt="plus icon" />
                <img src={minusIcon} alt="minus icon" />
              </button>
            </div>

            <p className="faq-answer">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
 */

  return (
    <div className="faq-item">
      <div className="faq-question-container">
        <h5 className="faq-question">{question}</h5>
        <button onClick={toggleAnswer}>
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "minus icon" : "plus icon"}
          />
        </button>
      </div>

      {answerElement}
    </div>
  );
}
