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

const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
`;

const Subtitle = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  color: grey;
  font-weight: normal;
`;

const FooterText = styled.h3`
  padding: 0;
  margin: 0;
  margin-top: 40px;
  font-weight: normal;
`;

export default App;
