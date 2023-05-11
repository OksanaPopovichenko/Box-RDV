import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faScissors,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../atoms";
import { ButtonGroup } from "../../molecules";

export function PayActions(): JSX.Element {
  return (
    <ButtonGroup gap="m">
      <Button variety="outline" size="xl">
        Plus d’options (produits, remises, ...)
      </Button>
      <Button variety="primary" size="xl">
        Encaisser 30,00 €
      </Button>
    </ButtonGroup>
  );
}

export function ModifyActions(): JSX.Element {
  return (
    <ButtonGroup gap="s">
      <Button
        variety="plain"
        size="s"
        iconLeft={<FontAwesomeIcon icon={faCopy} flip="vertical" />}
      >
        Copier
      </Button>
      <Button
        variety="plain"
        size="s"
        iconLeft={<FontAwesomeIcon icon={faScissors} />}
      >
        Couper
      </Button>
      <Button
        variety="plain"
        size="s"
        iconLeft={<FontAwesomeIcon icon={faTrashAlt} />}
      >
        Supprimer
      </Button>
    </ButtonGroup>
  );
}

export function None(): JSX.Element {
  return (
    <ButtonGroup gap="s">
      <Button variety="plain" size="s">
        Choisi(e)
      </Button>
      <Button variety="plain" size="s">
        Venu
      </Button>
      <Button variety="plain" size="s">
        Pas venu
      </Button>
    </ButtonGroup>
  );
}

export function Venu(): JSX.Element {
  return (
    <ButtonGroup gap="s">
      <Button variety="plain" size="s">
        Choisi(e)
      </Button>
      <Button variety="secondary" size="m">
        Venu
      </Button>
      <Button variety="plain" size="s">
        Pas venu
      </Button>
    </ButtonGroup>
  );
}

export function PasVenu(): JSX.Element {
  return (
    <ButtonGroup gap="s">
      <Button variety="plain" size="s">
        Choisi(e)
      </Button>
      <Button variety="plain" size="s">
        Venu
      </Button>
      <Button variety="destructive" size="m">
        Pas venu
      </Button>
    </ButtonGroup>
  );
}

export function ChoisiVenu(): JSX.Element {
  return (
    <ButtonGroup gap="s">
      <Button variety="primary" size="m">
        Choisi(e)
      </Button>
      <Button variety="secondary" size="m">
        Venu
      </Button>
      <Button variety="plain" size="s">
        Pas venu
      </Button>
    </ButtonGroup>
  );
}
