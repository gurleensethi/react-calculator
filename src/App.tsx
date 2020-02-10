import * as React from "react";
import "./styles.css";
import CalGrid from "./components/CalGrid";

const App: React.FunctionComponent<{}> = props => {
  return (
    <div className="App">
      <CalGrid />
    </div>
  );
};

export default App;
