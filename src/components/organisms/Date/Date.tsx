import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faSync } from "@fortawesome/free-solid-svg-icons";
import { Button, Checkbox, Input } from "../../atoms";

export default function Date(): JSX.Element {
  const [fullDay, setFullDay] = useState(false);

  const handleCheckboxChange = () => {
    setFullDay(!fullDay);
  };

  return (
    <div className="flex flex-row justify-between p-5 bg-white rounded-lg">
      <div className="flex flex-row justify-between gap-4 items-center">
        <Input
          type="simple"
          placeholder="Date"
          value="Lundi 21 mars"
          icon={<FontAwesomeIcon icon={faCalendarAlt} />}
          className="w-[300px]"
        />
        {!fullDay && (
          <div className="flex flex-row justify-between gap-4 items-center">
            <span className="text-[#5F706A] text-[13px] leading-4">de</span>
            <Input
              type="double"
              data={{
                input1Props: {
                  placeholder: "hour",
                  value: "14",
                  setValue: () => {},
                  className: "w-[55px]",
                },
                input2Props: {
                  placeholder: "min",
                  value: "30",
                  setValue: () => {},
                  className: "w-[55px]",
                },
              }}
            />
            <span className="text-[#5F706A] text-[13px] leading-4">à</span>
            <Input
              type="double"
              data={{
                input1Props: {
                  placeholder: "hour",
                  value: "15",
                  setValue: () => {},
                  className: "w-[55px]",
                },
                input2Props: {
                  placeholder: "min",
                  value: "30",
                  setValue: () => {},
                  className: "w-[55px]",
                },
              }}
            />
            <span className="text-[#34423E] text-[13px] leading-4 font-semibold">
              (1h)
            </span>
          </div>
        )}
        <Checkbox
          onChange={handleCheckboxChange}
          name="agree"
          label="Checkbox"
          checked={fullDay}
        />
      </div>
      <Button
        variety="plain"
        size="m"
        iconLeft={<FontAwesomeIcon icon={faSync} />}
        className="text-[#48BB78] border-b-[#48BB78] hover:text-[#38A169] hover:border-b-[#38A169]"
      >
        Répéter
      </Button>
    </div>
  );
}
