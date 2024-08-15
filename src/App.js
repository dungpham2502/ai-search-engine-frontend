// src/App.js

import React, { useState } from "react";
import ThreadList from "./components/ThreadList";
import ChatBox from "./components/ChatBox";

function App() {
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-1/4 bg-white border-r border-gray-200 p-4">
        <ThreadList
          onSelectThread={setSelectedThreadId}
        />
      </aside>
      <main className="w-3/4 p-6">
        {selectedThreadId ? (
          <ChatBox threadId={selectedThreadId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a thread to start chatting
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
