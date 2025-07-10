import { useState } from 'react';

const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you call cheese that isn't yours? Nacho cheese.",
];

function App() {
  const getRandomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];
  const [joke, setJoke] = useState(getRandomJoke());

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-purple-700">😂 Simple Joke App</h1>
        <p className="italic text-lg mb-6 text-gray-700">{joke}</p>
        <button
          onClick={() => setJoke(getRandomJoke())}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          New Joke
        </button>
      </div>
    </div>
  );
}

export default App;
