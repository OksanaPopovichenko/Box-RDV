import React from "react";

interface SwitchProps {
  label?: string;
  onChange: () => void;
  checked?: boolean;
  name?: string;
}

export default function Switch(props: SwitchProps): JSX.Element {
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
          <div
            className={`w-[34px] h-5 flex items-center rounded-full ${
              checked ? " bg-[#48BB78]" : "bg-[#BFC5C3]"
            }`}
          >
            <div
              className={`h-3.5 w-3.5 rounded-full transition-transform duration-300 ease-in-out bg-white ${
                checked ? "transform translate-x-3.5" : "translate-x-0"
              }`}
            />
          </div>
          {label && (
            <span className="ml-2 text-[#34423E] leading-4 text-[13px]">
              {label}
            </span>
          )}
        </label>
      </div>
    </div>
  );
}
