import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";

interface Props {}

export default class CalGrid extends React.Component<Props> {
  handleNumberClick: (num: number) => () => void = (num: number) => {
    return () => {
      console.log(num);
    };
  };

  render() {
    return (
      <NumContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <CalButton
            label={`${num}`}
            onPress={this.handleNumberClick(num)}
            key={num}
          />
        ))}
      </NumContainer>
    );
  }
}

const NumContainer = styled.div`
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
`;
