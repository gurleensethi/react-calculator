import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  expression: string;
}

export default class ExpressionBox extends React.Component<Props> {
  render() {
    return <Container>{this.props.expression}</Container>;
  }
}

const Container = styled.div`
  background-color: grey;
  color: white;
  font-size: 2rem;
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  align-items: flex-end;
`;
