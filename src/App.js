import TokenDisplay from "./components/TokenDisplay";
import TokenInput from "./components/TokenInput";
import { TokenProvider } from "./components/TokenProvider";
import "./styles.css";

export default function App() {
  return (
    <TokenProvider>
      <div>
        Type Token in input below. Watch how it propegates to the display using
        the useTokens hooks
      </div>
      <br />
      <TokenDisplay />
      <TokenInput />
    </TokenProvider>
  );
}
