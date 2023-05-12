import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../atoms";

export default function Service(): JSX.Element {
  return (
    <div className="flex flex-row justify-between p-5 bg-white rounded-lg">
      <div className="flex flex-row justify-between gap-4 items-center">
        <Input
          type="simple"
          placeholder="Choisir une prestation"
          icon={<FontAwesomeIcon icon={faFileAlt} />}
          className="min-w-[183px]"
        />
        <Input
          type="simple"
          placeholder="Choisir un collaborateur"
          className="min-w-[195px]"
        />
      </div>
      <Input
        type="double"
        data={{
          input1Props: {
            placeholder: "time",
            value: "60",
            setValue: () => {},
            className: "w-[71px]",
          },
          input2Props: {
            disabled: true,
            value: "Min",
            setValue: () => {},
            className: "w-[48px]",
          },
        }}
      />
    </div>
  );
}
