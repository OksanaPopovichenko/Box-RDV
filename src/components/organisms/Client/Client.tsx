import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-regular-svg-icons";
import { Input, Switch, Tab } from "../../atoms";

export default function Client(): JSX.Element {
  const [toggle, setSwitch] = useState(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleTabChange = (value: string) => {
    console.log("Selected option:", value); // eslint-disable-line
  };

  const handleSwitchChange = () => {
    setSwitch(!toggle);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 bg-white rounded-lg">
        <Input
          type="labelInside"
          placeholder="Choisir un client"
          icon={<FontAwesomeIcon icon={faCircleUser} />}
          className="w-[356px]"
          action={{
            btnText: "Créer",
            onChange: () => {},
          }}
        />
        <Input
          type="simple"
          placeholder="Téléphone"
          className="w-[240px]"
          disabled
        />
        <Input
          type="simple"
          placeholder="Email"
          className="w-[356px]"
          disabled
        />
      </div>
      <Switch
        onChange={handleSwitchChange}
        name="toggle"
        label="Switch"
        checked={toggle}
      />
      <Tab
        options={options}
        onChange={handleTabChange}
        icon={<FontAwesomeIcon icon={faUser} />}
      />
    </div>
  );
}
