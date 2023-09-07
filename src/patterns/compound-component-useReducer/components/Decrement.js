import React from "react";
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterActionContext } from "../useCounterContext";

function Decrement({ icon = "minus" }) {
  const dispatch = useCounterActionContext();
  console.log('decrement render--', Date.now())
  return (
    <StyledButton onClick={() => dispatch({ type: 'decrement' })}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Decrement };
