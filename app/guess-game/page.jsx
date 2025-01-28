"use client";

import React, { useState } from "react";

const GamePage = () => {
  const [participants, setParticipants] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 },
  ]);
  const [guess, setGuess] = useState("");
  const [timer, setTimer] = useState(60);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl flex justify-between items-center bg-white shadow-lg p-4 rounded-lg">
        <div className="text-xl font-bold">Timer: {timer}s</div>
        <button className="text-blue-500 hover:underline font-medium">
          Rules
        </button>
        <button className="text-red-500 hover:underline font-medium">
          Exit
        </button>
      </div>

      <div className="w-full max-w-4xl mt-6 flex flex-col lg:flex-row gap-4">
        <div className="bg-white shadow-lg p-4 rounded-lg flex-grow lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Scoreboard</h2>
          <ul>
            {participants.map((participant, index) => (
              <li
                key={index}
                className="flex justify-between p-2 border-b last:border-b-0"
              >
                <span>{participant.name}</span>
                <span className="font-bold">{participant.score}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg flex-grow lg:w-2/3">
          <h2 className="text-lg font-bold mb-4">Guess the Prompt</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
            <p className="text-gray-500">[Image Placeholder]</p>
          </div>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your guess here..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Submit Guess
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
