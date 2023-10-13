import { useEffect, useId, useState } from "react";
import { cn } from "./cn";

export interface SplitFlapProps {
  character: string;
  onSettled?: () => void;
}

export const letters = [
  " ",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  ".",
  ",",
  ";",
  ":",
  "/",
  "?",
  "'",
  '"',
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const flipLetterTime = 60;

function Letter(props: { idx: number }) {
  return <>{letters[props.idx] === " " ? <>&nbsp;</> : letters[props.idx]}</>;
}

export function SplitFlap({ character }: SplitFlapProps) {
  const targetIndex = Math.max(letters.indexOf(character.toUpperCase()), 0);
  const [idx, setIdx] = useState(0);
  const prevIdx = (letters.length + idx - 1) % letters.length;

  useEffect(() => {
    if (idx === targetIndex) {
      return;
    }
    const timeout = setTimeout(() => {
      setIdx((idx + 1) % letters.length);
    }, flipLetterTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [idx, targetIndex]);

  const id = useId();

  return (
    <div
      key={id + idx}
      className="relative w-[1em] h-[2em] rounded bg-stone-900 text-stone-50"
    >
      <div className="absolute top-[-1px] w-full overflow-hidden rounded-t bg-stone-900 h-1/2">
        <span className="absolute top-0 flex justify-center w-full pt-1">
          <Letter idx={idx} />
        </span>
      </div>

      <div className="absolute bottom-0 z-10 w-full overflow-hidden origin-top rounded-b bg-stone-900 h-1/2 backface-hidden animate-flip-back border-b-[1px] border-b-stone-300/50">
        <span className="absolute bottom-0 flex justify-center w-full pb-1">
          <Letter idx={idx} />
        </span>
      </div>

      <div
        className={cn(
          "absolute top-0 z-10 w-full overflow-hidden origin-bottom bg-stone-900 rounded-t h-1/2 backface-hidden animate-flip border-t-[1px] border-t-stone-50/50",
        )}
      >
        <span className="absolute top-0 flex justify-center w-full pt-1">
          <Letter idx={prevIdx} />
        </span>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden rounded-b bg-stone-900 h-1/2 ">
        <span className="absolute bottom-0 flex justify-center w-full pb-1">
          <Letter idx={prevIdx} />
        </span>
      </div>
    </div>
  );
}
