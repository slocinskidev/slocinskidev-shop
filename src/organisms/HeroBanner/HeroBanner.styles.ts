import Button from 'atoms/Button';
import styled from 'styled-components';
import breakpoint from 'utils/breakpoints';
import RightArrow from 'atoms/SVG/RightArrow';

export const StyledRightArrow = styled(RightArrow)`
  margin-left: 1rem;
  width: 25px;
`;

export const Wrapper = styled.section`
  display: grid;
  margin: 6rem auto;
  gap: 2rem;

  @media ${breakpoint.device.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  order: 1;

  @media ${breakpoint.device.md} {
    order: 0;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;

  @media ${breakpoint.device.md} {
    font-size: ${({ theme }) => theme.font.size.xxl};
    text-align: left;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  line-height: 1.5;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  margin-top: 4rem;
`;
