import React from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <div className="faq-question-container">
        <h5 className="faq-question">{question}</h5>
        <button onClick={onToggle}>
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "minus icon" : "plus icon"}
          />
        </button>
      </div>

      <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
        <p className="faq-answer">{answer}</p>
      </div>    </div>
  );
}
