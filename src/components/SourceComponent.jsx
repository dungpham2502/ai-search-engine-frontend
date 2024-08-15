// src/components/SourceComponent.js

import React from "react";

const SourceComponent = ({ sources }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Related Sources:</h3>
      <ul className="list-disc pl-5">
        {sources.map((source, index) => (
          <li key={index}>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceComponent;
