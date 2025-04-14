import React from "react";
import starIcon from "../assets/images/icon-star.svg";

export default function FAQ() {
  return (
    <div className="faq-app">
      {/* Background elements */}
      <div className="background-container">
        <div className="background-pattern"></div>
        <div className="background-color"></div>
      </div>

      {/* FAQ content */}
      <main className="faq-container">
        <div className="faq-header">
          <img src={starIcon} alt="Star icon" className="star-icon" />
          <h1>FAQs</h1>
        </div>

        <div className="faq-content">
          <div className="faq-item">
            <button className="faq-question">
              What is Frontend Mentor, and how will it help me?
            </button>
            <div className="faq-answer">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </div>
          </div>

          {/* FAQ - 2 */}
          <div className="faq-item">
            <button className="faq-question">Is Frontend Mentor free?</button>
            <div className="faq-answer">
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </div>
          </div>

          {/* FAQ - 3 */}
          <div className="faq-item">
            <button className="faq-question">
              Can I use Frontend Mentor projects in my portfolio?
            </button>
            <div className="faq-answer">
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </div>
          </div>

          {/* FAQ - 4 */}
          <div className="faq-item">
            <button className="faq-question">
              How can I get help if I'm stuck on a challenge?
            </button>
            <div className="faq-answer">
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
