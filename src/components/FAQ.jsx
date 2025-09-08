import React, { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import starIcon from "../assets/images/icon-star.svg";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="faq-app">
      <div className="background-container">
        <div className="background-pattern"></div>
        <div className="background-color"></div>
      </div>

      <main className="faq-container">
        <div className="faq-header">
          <img src={starIcon} alt="Star icon" className="star-icon" />
          <h1>FAQs</h1>
        </div>

        <div className="faq-content">
          {faqData.map((Item) => (
            <FAQItem
              key={Item.question}
              question={Item.question}
              answer={Item.answer}
              isOpen={openQuestion === Item.question}
              onToggle={() =>
                setOpenQuestion((prev) =>
                  prev === Item.question ? null : Item.question
                )
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
