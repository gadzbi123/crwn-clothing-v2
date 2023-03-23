import styled from "styled-components";
import { ReactComponent as SpinnerSvg } from "../../assets/spinner.svg";
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledSpinner = styled(SpinnerSvg)`
  width: 10vw;
  height: 10vh;
`;
