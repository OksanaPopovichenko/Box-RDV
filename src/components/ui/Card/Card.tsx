import React, { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  header: {
    title: string;
    buttonGroup: ReactNode;
  };
}

export default function Card(props: CardProps): JSX.Element {
  const { children, header } = props;

  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] w-full bg-white mt-4 rounded-xl overflow-hidden">
        <div className="py-3.5 px-7 flex flex-row justify-between">
          <h2 className="text-[15px] color-[#34423E] font-semibold">
            {header.title}
          </h2>
          <div>{header.buttonGroup}</div>
        </div>
        <div className="bg-[#ECEEED]">{children}</div>
      </div>
    </div>
  );
}
