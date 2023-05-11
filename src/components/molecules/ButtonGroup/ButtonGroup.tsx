import React, { ReactNode } from "react";

export interface ButtonGroupProps {
  children: ReactNode;
  gap: "l" | "m" | "s";
}

export default function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const { children, gap } = props;

  const gapList: { [key: string]: string } = {
    l: "gap-5",
    m: "gap-3",
    s: "gap-2",
  };

  return (
    <div className={`flex justify-center items-center ${gapList[gap]}`}>
      {children}
    </div>
  );
}
