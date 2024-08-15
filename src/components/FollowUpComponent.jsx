// src/components/FollowUpComponent.js

import React from "react";

const FollowUpComponent = ({ followUpQuestions, onSendFollowUp }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Follow-Up Questions:</h3>
      <ul className="list-disc pl-5">
        {followUpQuestions.map((question, index) => (
          <li
            key={index}
            className="cursor-pointer hover:underline"
            onClick={() => onSendFollowUp(question)}
          >
            {question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUpComponent;
