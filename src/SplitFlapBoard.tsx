import { useId } from "react";
import { SplitFlap } from "./SplitFlap";

export interface SplitFlapBoardProps {
  content: string[];
  rows?: number;
  columns?: number;
}

export function SplitFlapBoard({ content }: SplitFlapBoardProps) {
  const id = useId();

  return (
    <>
      {content.map((str, rowIdx) => {
        return (
          <div key={id + "-row-" + rowIdx} className="flex gap-1 font-mono">
            {str.split("").map((char, i) => (
              <SplitFlap key={id + "-flap-" + i} character={char} />
            ))}
          </div>
        );
      })}
    </>
  );
}
