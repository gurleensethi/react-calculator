import * as React from "react";
import CalGrid from "./components/CalGrid";
import styled from "@emotion/styled";

const App: React.FunctionComponent<{}> = props => {
  return (
    <Container>
      <CalGrid />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(220, 220, 220);
`;

export default App;
