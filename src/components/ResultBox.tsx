import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  result: string;
}

export default class ResultBox extends React.Component<Props> {
  render() {
    return <Conatiner>{this.props.result}</Conatiner>;
  }
}

const Conatiner = styled.div`
  color: white;
  display: flex;
  font-size: 1.5rem;
  padding: 16px 16px 0px 16px;
  justify-content: flex-end;
  align-items: flex-end;
`;
