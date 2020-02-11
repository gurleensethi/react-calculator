import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";
import OptionButton from "./OptionButton";

interface Props {}

export default class CalGrid extends React.Component<Props> {
  gridMap: string[][] = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "/"],
    [".", "0", "( )", "%"]
  ];

  handleNumberClick: (num: string) => () => void = (num: string) => {
    return () => {
      console.log(num);
    };
  };

  render() {
    return (
      <NumContainer>
        {this.gridMap.map(row =>
          row.map(num => {
            const isNum = !!Number(num);
            return isNum ? (
              <CalButton
                label={num}
                onPress={this.handleNumberClick(num)}
                key={num}
              />
            ) : (
              <OptionButton
                label={num}
                onPress={this.handleNumberClick(num)}
                key={num}
              />
            );
          })
        )}
      </NumContainer>
    );
  }
}

const NumContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
`;
