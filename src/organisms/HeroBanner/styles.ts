import ShoppingHero from 'atoms/SVG/ShoppingHero';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.variable.wrapper};
  display: grid;
  margin: 6rem auto;
  gap: 2rem;

  ${({ theme }) => theme.breakpoint.md`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 2rem;
  order: 1;

  ${({ theme }) => theme.breakpoint.md`
    order: 0;
  `}
`;

export const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 82.5%;
  margin-bottom: 2rem;

  ${({ theme }) =>
    theme.breakpoint.md &&
    css`
      font-size: ${({ theme }) => theme.font.size.xl};
    `}
`;

export const Description = styled.p``;

export const StyledShoppingHero = styled(ShoppingHero)`
  width: 100%;
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
`;
