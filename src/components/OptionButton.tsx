import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  label: string;
  onPress: () => void;
}

export default class OptionButton extends React.Component<Props> {
  render() {
    return <Button>{this.props.label}</Button>;
  }
}

const Button = styled.button`
  font-size: 2rem;
  border: none;
  background: black;
  color: white;
  padding: 16px;
  transition: 0.2s;
  width: 25.0%;

  &:hover {
    background: rgb(50, 50, 50);
    cursor: pointer;
  }

  &:active {
    background: orange;
    cursor: pointer;
  }
`;
