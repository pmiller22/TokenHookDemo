import React from "react";
import { useTokens } from "./TokenProvider";

const TokenDisplay = () => {
  const tokens = useTokens();
  return (
    <div>
      <b>Token:</b> <i>{tokens.tokens.fakeToken}</i>
    </div>
  );
};
export default TokenDisplay;
