import React from "react";

const Message = ({ message }) => {
  const formatText = (text) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.replace(/\*\*/g, "");
  };
  return (
    <div
      className={`mb-4 p-3 rounded-lg ${
        message.isUser
          ? "bg-blue-100 text-right animate-fade-in-right"
          : "bg-gray-200 text-left animate-fade-in-left"
      }`}
    >
      <p className="text-sm text-gray-500">
        <strong>{message.isUser ? "You" : "Bot"}:</strong> {message.prompt}
      </p>
      <p className="text-sm text-gray-700 mt-1">{formatText(message.response)}</p>
    </div>
  );
};

export default Message;
