import React from "react";

interface CheckboxProps {
  label?: string;
  onChange: () => void;
  checked?: boolean;
  name?: string;
}

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const { label, name, checked, onChange } = props;

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-start relative">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <label htmlFor={name} className="flex items-center cursor-pointer">
          <div className="w-3 h-3 m-0.5 border-2 border-[#34423E] bg-transparent">
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#34423E"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          {label && (
            <span className="ml-1.5 text-[#34423E] leading-4 text-[13px] font-semibold">
              {label}
            </span>
          )}
        </label>
      </div>
    </div>
  );
}
