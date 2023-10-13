import { useId } from "react";
import { SplitFlap } from "./SplitFlap";

export interface SplitFlapBoardProps {
  text: string;
  rows?: number;
  columns?: number;
}

export function SplitFlapBoard({ text }: SplitFlapBoardProps) {
  const id = useId();

  return (
    <div className="flex gap-1 font-mono">
      {text.split("").map((char, i) => (
        <SplitFlap key={id + "-" + i} character={char} />
      ))}
    </div>
  );
}
