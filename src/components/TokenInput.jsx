import React from "react";
import { useTokens } from "./TokenProvider";

const TokenInput = () => {
  const tokens = useTokens();
  return (
    <div>
      <input
        type="text"
        value={tokens.tokens.fakeToken ?? ""}
        onChange={(event) => tokens.setToken(event.target.value)}
      />
    </div>
  );
};

export default TokenInput;
