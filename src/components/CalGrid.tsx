import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";
import ExpressionBox from "./ExpressionBox";
import Breakpoints from "../common/breakpoints";

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
        </ExpressionContainer>
        <NumContainer>
          {this.gridMap.map(row =>
            row.map(num => {
              return (
                <CalButton
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
  box-shadow: 5px 5px 10px grey;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: ${Breakpoints.Desktop}px) {
    max-width: 500px;
    max-height: 600px;
  }
`;

const NumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ExpressionContainer = styled.div`
  display: flex;
  flex-grow: 1;

  & > div:first-child {
    flex-grow: 1;
    padding-right: 16px;
  }
`;
