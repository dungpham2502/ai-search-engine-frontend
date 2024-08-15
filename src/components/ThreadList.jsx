import React, { useEffect, useState } from "react";
import { getThreadsByUserId, createThread } from "../services/api";

const ThreadList = ({ userId, onSelectThread }) => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      if (userId) {
        const result = await getThreadsByUserId(userId);
        setThreads(result.data);
      }
    };
    fetchThreads();
  }, [userId]);
    
    const handleCreateThread = async () => {
      const newThread = await createThread({ title: 'New Chat', user_id: userId });
      console.log(newThread)
      setThreads([...threads, newThread.data]);
      onSelectThread(newThread.data._id);
    }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Your Threads</h3>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={handleCreateThread}
        >
          New Chat
        </button>
      </div>
      <ul className="space-y-2">
        {threads.map((thread) => (
          <li
            key={thread._id}
            className="cursor-pointer p-2 bg-gray-50 rounded-lg hover:bg-gray-100"
            onClick={() => onSelectThread(thread.thread_id)}
          >
            {thread.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
