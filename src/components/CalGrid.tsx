import * as React from "react";
import styled from "@emotion/styled";
import CalButton from "./CalButton";
import ExpressionBox from "./ExpressionBox";
import Breakpoints from "../common/breakpoints";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { addSymbol } from "../store/expression/actions";

interface OwnProps {}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {
    expression: state.expression.value
  };
};

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps) => {
  return {
    addSymbol: (symbol: string) => dispatch(addSymbol(symbol))
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
      case "=":
        break;
      default:
        this.props.addSymbol(symbol);
    }
  };

  render() {
    return (
      <Container>
        <ExpressionContainer>
          <ExpressionBox expression={this.props.expression} />
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
  flex-grow: 1;

  & > div:first-child {
    flex-grow: 1;
    padding-right: 16px;
  }
`;

export default connector(CalGrid);
