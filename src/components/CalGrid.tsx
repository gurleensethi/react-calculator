import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";
import ExpressionBox from "./ExpressionBox";
import ResultBox from "./ResultBox";
import Breakpoints from "../common/breakpoints";
import { connect, ConnectedProps } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  handleAddSymbol,
  handleExpressionEqualsResult
} from "../store/expression/actions";

interface OwnProps {}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {
    expression: state.expression.value,
    result: state.result.result
  };
};

const mapDispatchToProps = (dispatch: AppDispatch, props: OwnProps) => {
  return {
    addSymbol: (symbol: string) => dispatch(handleAddSymbol(symbol)),
    handleEqualsPress: () => dispatch(handleExpressionEqualsResult())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class CalGrid extends React.Component<OwnProps & PropsFromRedux> {
  gridMap: string[][] = [
    ["AC", "(", ")", "="],
    ["1", "2", "3", "%"],
    ["4", "5", "6", "x"],
    ["7", "8", "9", "+"],
    [" ", "0", ".", "-"]
  ];

  handleNumberClick = (symbol: string) => {
    switch (symbol) {
      case "AC":
        break;
      case "x":
        this.props.addSymbol("*");
        break;
      case "=":
        this.props.handleEqualsPress();
        break;
      default:
        this.props.addSymbol(symbol);
    }
  };

  render() {
    const { result, expression } = this.props;
    return (
      <Container>
        <ExpressionContainer>
          <ResultBox result={result} />
          <ExpressionBox expression={expression} />
        </ExpressionContainer>
        <NumContainer>
          {this.gridMap.map(row =>
            row.map(num => {
              return (
                <CalButton
                  label={num}
                  onPress={() => this.handleNumberClick(num)}
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
  flex-direction: column;
  flex-grow: 1;
  background-color: black;
  justify-content: flex-end;
`;

export default connector(CalGrid);
