import styled from "@emotion/styled";

interface Props {
  isValid: boolean;
}

const Conatiner = styled.div<Props>`
  display: flex;
  font-size: 1.5rem;
  padding: 16px 16px 0px 16px;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${props => (props.isValid ? "white" : "red")};
  transition: 0.2s;
`;

export default Conatiner;
