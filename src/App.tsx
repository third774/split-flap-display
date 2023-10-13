import { useEffect, useState } from "react";
import "./App.css";
import { SplitFlapBoard } from "./SplitFlapBoard";

const lyrics = [
  "Now, this is a story",
  "all about how",
  "My life got flipped-turned",
  "upside down",
  "And I'd like to take a minute",
  "Just sit right there",
  "I'll tell you how I became",
  "the prince of a town called Bel-Air",
  "In West Philadelphia",
  "born and raised",
  "On the playground was where",
  "I spent most of my days",
  "Chillin' out,",
  "maxin', relaxin', all cool",
  "And all shootin' some b-ball",
  "outside of the school",
  "When a couple of guys",
  "who were up to no good",
  "Started making trouble",
  "in my neighborhood",
  "I got in one little fight",
  "and my mom got scared",
  "She said,",
  "\"You're movin' with your auntie",
  'and uncle in Bel-Air"',
];

const lines = 4;

function App() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIdx((i) => i + lines);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const maxLength = lyrics
    .map((str) => str.length)
    .reduce((acc, val) => (val > acc ? val : acc), 0);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 bg-stone-600">
      <SplitFlapBoard
        content={Array.from({ length: lines }).map((_, i) =>
          lyrics[(idx + i) % lyrics.length].padEnd(maxLength, " "),
        )}
      />
    </div>
  );
}

export default App;
