import React, { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  header: {
    title: string;
    buttonGroup: ReactNode;
  };
  footer: ReactNode;
}

export default function Card(props: CardProps): JSX.Element {
  const { children, header, footer } = props;

  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] w-full h-[742px] mt-4 rounded-xl overflow-hidden bg-[#ECEEED] flex flex-col justify-between">
        <div>
          <div className="py-1.5 px-7 flex flex-row justify-between items-center bg-white">
            <h2 className="text-[15px] color-[#34423E] font-semibold">
              {header.title}
            </h2>
            <div>{header.buttonGroup}</div>
          </div>
          <div className="py-5 px-7 flex flex-col gap-4">{children}</div>
        </div>
        <div className="px-7">{footer}</div>
      </div>
    </div>
  );
}
