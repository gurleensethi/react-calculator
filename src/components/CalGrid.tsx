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
        <ExpressionContainer>
          <ExpressionBox expression={"2 + 4"} />
          <OptionButton label="C" onPress={() => console.log("clear")} />
        </ExpressionContainer>
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
  box-shadow: 5px 5px 10px grey;
  border-radius: 6px;
  overflow: hidden;
`;

const NumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ExpressionContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > div:first-child {
    flex-grow: 1;
    padding-right: 16px;
  }
`;
