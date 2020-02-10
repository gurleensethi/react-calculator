import * as React from "react";
import "./styles.css";
import CalButton from "./components/CalButton";

const App: React.FunctionComponent<{}> = props => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CalButton label="1" onPress={() => console.log("Press")} />
    </div>
  );
};

export default App;
