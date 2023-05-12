import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "../../atoms";

interface ServiceProps {
  onDelete: () => void;
  numberOfServices: number;
}

export default function Service(props: ServiceProps): JSX.Element {
  const { onDelete, numberOfServices } = props;

  const [prestation, setPrestation] = useState("");
  const [collaborateur, setCollaborateur] = useState("");

  const handleDelete = () => {
    setPrestation("");
    setCollaborateur("");

    if (numberOfServices > 1) {
      onDelete();
    }
  };

  console.log(prestation, collaborateur); // eslint-disable-line

  return (
    <div className="flex flex-row justify-between p-5 bg-white rounded-lg">
      <form className="flex flex-row justify-between gap-4 items-center">
        <Input
          type="labelInside"
          setValue={(value) => setPrestation(value)}
          placeholder="Choisir une prestation"
          icon={<FontAwesomeIcon icon={faFileAlt} />}
          className="min-w-[183px]"
          value={prestation}
        />
        <Input
          type="labelInside"
          placeholder="Choisir un collaborateur"
          className="min-w-[195px]"
          setValue={(value) => setCollaborateur(value)}
          value={collaborateur}
        />
      </form>
      <div className="flex flex-row gap-4">
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
        <Button
          variety="outline"
          size="l"
          type="reset"
          className="w-[48px]"
          iconRight={<FontAwesomeIcon icon={faTrashAlt} />}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
