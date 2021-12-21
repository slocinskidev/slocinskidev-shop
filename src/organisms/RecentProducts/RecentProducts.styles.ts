import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';
import Button from 'atoms/Button';
import RightArrow from 'atoms/SVG/RightArrow';

export const StyledRightArrow = styled(RightArrow)`
  margin-left: 1rem;
  width: 25px;
`;

export const Wrapper = styled.section`
  display: grid;
`;

export const StyledPageTitle = styled(PageTitle)`
  text-align: center;
  margin: 2rem 0 4rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 6rem;
  justify-self: center;
`;
