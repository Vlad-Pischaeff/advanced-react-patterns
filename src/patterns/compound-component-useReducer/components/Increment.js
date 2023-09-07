import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";
import { useCounterActionContext } from "../useCounterContext";

function Increment({ icon = "plus" }) {
  const dispatch = useCounterActionContext();
  console.log('increment render--', Date.now());
  return (
    <StyledButton onClick={() => dispatch({ type: 'increment' })}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Increment };
