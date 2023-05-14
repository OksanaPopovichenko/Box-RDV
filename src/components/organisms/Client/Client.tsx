import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCakeCandles,
  faInfoCircle,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Switch, Tab } from "../../atoms";

export default function Client(): JSX.Element {
  const [toggleRappel, handleRappel] = useState(true);
  const [toggleMarketing, handleMarketing] = useState(false);

  const options = [
    { value: "homme", label: "Homme" },
    { value: "femme", label: "Femme" },
    { value: "enfant", label: "Enfant" },
  ];

  const handleTabChange = (value: string) => {
    console.log("Selected option:", value); // eslint-disable-line
  };

  const handleRappelChange = () => {
    handleRappel(!toggleRappel);
  };

  const handleMarketingChange = () => {
    handleMarketing(!toggleMarketing);
  };

  return (
    <div className="p-5 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex flex-row justify-between">
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
      <div className="px-10 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center justify-start">
          <Tab
            options={options}
            onChange={handleTabChange}
            icon={<FontAwesomeIcon icon={faUser} />}
          />
          <Input
            type="double"
            icon={<FontAwesomeIcon icon={faCakeCandles} />}
            data={{
              input1Props: {
                placeholder: "day",
                value: "20",
                setValue: () => {},
                className: "w-[108px]",
              },
              input2Props: {
                placeholder: "month",
                value: "Sept",
                setValue: () => {},
                className: "w-[108px]",
              },
            }}
          />
          <Switch
            onChange={handleRappelChange}
            name="rappel"
            label="SMS de rappel"
            checked={toggleRappel}
          />
          <Switch
            onChange={handleMarketingChange}
            name="marketing"
            label="SMS marketing"
            checked={toggleMarketing}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            size="m"
            className="!p-0 !m-0"
            variety="plain"
            iconLeft={<FontAwesomeIcon icon={faInfoCircle} />}
          >
            Info client
          </Button>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-1 items-center">
              <Button
                size="m"
                className="!p-0 !m-0"
                variety="plain"
                iconLeft={<FontAwesomeIcon icon={faGift} />}
              >
                Carte de fidélité
              </Button>
              <span className="text-[#5F706A] text-[13px] font-normal">
                : Points : 42 - Gains : 10,00€ (+)
              </span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Button
                size="m"
                className="!p-0 !m-0"
                variety="plain"
                iconLeft={<FontAwesomeIcon icon={faGift} />}
              >
                Forfait brushing par 5 - cheveux courts
              </Button>
              <span className="text-[#5F706A] text-[13px] font-normal">
                (4)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
