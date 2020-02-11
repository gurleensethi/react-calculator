import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";
import OptionButton from "./OptionButton";
import ExpressionBox from "./ExpressionBox";

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
      <Container>
        <ExpressionBox expression={"2 + 4"} />
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
      </Container>
    );
  }
}

const Container = styled.div`
  width: 400px;
  height: 400px;
`;

const NumContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;
