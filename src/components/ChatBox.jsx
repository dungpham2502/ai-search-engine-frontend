// src/components/ChatBox.js

import React, { useState, useEffect } from "react";
import { getChatsByThreadId, createChat, queryAI } from "../services/api";
import Message from "./Message";
import InputBox from "./InputBox";
import SourceComponent from "./SourceComponent";
import FollowUpComponent from "./FollowUpComponent";

const ChatBox = ({ threadId }) => {
  const [messages, setMessages] = useState([]);
  const [sources, setSources] = useState([]);
  const [followUpQuestions, setFollowUpQuestions] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      if (threadId) {
        const result = await getChatsByThreadId(threadId);
        setMessages(result.data);
      }
    };
    fetchChats();
  }, [threadId]);

  const handleSendMessage = async (prompt) => {
    const userMessage = { prompt, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const data = await createChat({ prompt, thread_id: threadId });
      const aiResponse = await queryAI(prompt);

      // Assuming aiResponse has the structure as provided
      const { answer, followUpQuestions, sources } = aiResponse;

      const aiMessage = {
        response: answer,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

      setFollowUpQuestions(
        Array.isArray(followUpQuestions) ? followUpQuestions : []
      );
      setSources(Array.isArray(sources) ? sources : []);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>

      {sources.length > 0 && <SourceComponent sources={sources} />}
      {followUpQuestions.length > 0 && (
        <FollowUpComponent
          followUpQuestions={followUpQuestions}
          onSendFollowUp={handleSendMessage}
        />
      )}

      <div className="mt-4">
        <InputBox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;
