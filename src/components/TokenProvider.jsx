import React, { createContext, useReducer, useMemo, useContext } from "react";

const TokenContext = createContext({
  tokens: {
    fakeToken: null
  },
  setToken: () => {}
});

const actions = {
  setFakeToken: "SET_FAKE_TOKEN"
};

const tokenReducer = (tokens, action) => {
  switch (action.type) {
    case actions.setFakeToken:
      return {
        ...tokens,
        fakeToken: action.payload
      };
    default:
      throw new Error();
  }
};
const TokenProvider = (props) => {
  const [tokens, tokensDispatch] = useReducer(tokenReducer, {
    fakeToken: null
  });
  const setToken = (token) =>
    tokensDispatch({ type: actions.setFakeToken, payload: token });
  const value = useMemo(() => ({ tokens, setToken }), [tokens]);
  return (
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  );
};

const useTokens = () => useContext(TokenContext);
export { useTokens, TokenProvider };
