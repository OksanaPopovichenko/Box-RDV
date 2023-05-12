import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Input } from "../../atoms";

export default function Date(): JSX.Element {
  const [fullDay, setFullDay] = useState(false);

  const handleCheckboxChange = () => {
    setFullDay(!fullDay);
  };

  return (
    <div>
      <Checkbox
        onChange={handleCheckboxChange}
        name="agree"
        label="Checkbox"
        checked={fullDay}
      />

      <Input
        type="simple"
        placeholder="Email"
        icon={<FontAwesomeIcon icon={faCalendarAlt} />}
      />
      <Input
        type="double"
        data={{
          input1Props: {
            placeholder: "date",
            value: "20",
            setValue: () => {},
            className: "w-[108px]",
            disabled: true,
          },
          input2Props: {
            placeholder: "month",
            value: "Sept",
            setValue: () => {},
            className: "w-[108px]",
          },
        }}
      />
    </div>
  );
}
