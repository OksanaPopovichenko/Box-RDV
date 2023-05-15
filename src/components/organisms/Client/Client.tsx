import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCakeCandles,
  faInfoCircle,
  faGift,
  faFileAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Switch, Tab } from "../../atoms";

export default function Client(): JSX.Element {
  const [createClient, handleCreationOfClient] = useState(false);

  const [toggleRappel, handleRappel] = useState(true);
  const [toggleMarketing, handleMarketing] = useState(false);
  const [name, handleName] = useState("");
  const [phone, handlePhone] = useState("");
  const [email, handleEmail] = useState("");
  const [gender, handleGender] = useState("homme");

  const handleGenderTab = (value: string) => {
    handleGender(value);
  };

  const resetClientCreation = () => {
    handleCreationOfClient(false);
    handleName("");
    handlePhone("");
    handleEmail("");
    handleGender("homme");
  };

  return (
    <div className="p-5 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <Input
          type="labelInside"
          placeholder="Choisir un client"
          icon={<FontAwesomeIcon icon={faCircleUser} />}
          wrapClassName="flex-1 max-w-[396px]"
          className="w-full"
          value={name}
          setValue={(value) => handleName(value)}
          action={{
            btnText: "Créer",
            onClick: () => handleCreationOfClient(true),
            display: !createClient,
          }}
        />
        <Input
          type="labelInside"
          placeholder="Téléphone"
          wrapClassName="flex-1 max-w-[240px]"
          className="w-full"
          value={phone}
          setValue={(value) => handlePhone(value)}
          pattern="\+\d{1,3}\d{9}"
          disabled={!createClient}
        />
        <Input
          type="labelInside"
          placeholder="Email"
          wrapClassName="flex-1 max-w-[356px]"
          className="w-full"
          value={email}
          setValue={(value) => handleEmail(value)}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          disabled={!createClient}
        />
        {createClient && (
          <Button
            variety="outline"
            size="l"
            className="w-[48px]"
            iconRight={<FontAwesomeIcon icon={faTrashAlt} />}
            type="reset"
            onClick={resetClientCreation}
          />
        )}
      </div>
      {createClient && (
        <div className="px-10 flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center justify-start">
            <Tab
              options={[
                { value: "homme", label: "Homme" },
                { value: "femme", label: "Femme" },
                { value: "enfant", label: "Enfant" },
              ]}
              onChange={handleGenderTab}
              icon={<FontAwesomeIcon icon={faUser} />}
              value="homme"
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
              onChange={() => handleRappel(!toggleRappel)}
              name="rappel"
              label="SMS de rappel"
              checked={toggleRappel}
            />
            <Switch
              onChange={() => handleMarketing(!toggleMarketing)}
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
                  iconLeft={<FontAwesomeIcon icon={faFileAlt} />}
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
      )}
    </div>
  );
}
