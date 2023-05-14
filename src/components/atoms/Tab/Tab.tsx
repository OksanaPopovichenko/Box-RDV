/* eslint-disable no-nested-ternary */
import React, { ReactNode, useState } from "react";

interface TabOption {
  value: string;
  label: string;
}

interface TabProps {
  options: TabOption[];
  onChange: (value: string) => void;
  icon?: ReactNode;
}

export default function Tab(props: TabProps): JSX.Element {
  const { options, onChange, icon } = props;
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  const handleTabChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-row justify-start items-center gap-2">
      {icon && <div className="text-[#7F8C88] text-m">{icon}</div>}
      <div className="flex items-center justify-center">
        {options.map((option, index) => (
          <button
            type="button"
            key={option.value}
            className={`${
              selectedValue === option.value
                ? "bg-white text-[#34423E]"
                : "bg-[#F6F7F8] text-[#7F8C88]"
            } text-[13px] leading-4 py-4 px-2 w-[84px] border border-[#ECEEED] ${
              index === 0
                ? "rounded-l-lg border-r-0"
                : index === options.length - 1
                ? "rounded-r-lg border-l-0"
                : ""
            } transition-all duration-200 ease-in-out`}
            onClick={() => handleTabChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
