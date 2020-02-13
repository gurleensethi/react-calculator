import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
}

interface State {}

export default class CalButton extends React.Component<Props, State> {
  static defaultProps = {
    backgroundColor: "darkgrey"
  };

  render() {
    return (
      <Button
        backgroundColor={this.props.backgroundColor}
        onClick={this.props.onPress}
      >
        {this.props.label}
      </Button>
    );
  }
}

const Button = styled.button<{ backgroundColor: string | undefined }>`
  border: none;
  font-size: 2rem;
  color: white;
  transition: 0.2s;
  width: 25%;
  padding: 16px;

  &:hover {
    background: grey;
    cursor: pointer;
  }

  &:active {
    background: orange;
  }

  background-color: ${props => props.backgroundColor};
`;
