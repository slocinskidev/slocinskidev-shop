import styled from 'styled-components';
import Button from 'atoms/Button';
import breakpoint from 'utils/breakpoints';
import Accordion from 'molecules/Accordion';
import RightArrow from 'atoms/SVG/RightArrow';

export const StyledRightArrow = styled(RightArrow)`
  margin-left: 1rem;
  width: 25px;
`;

export const Wrapper = styled.section`
  display: grid;
  margin: 4rem 0;
  gap: 4rem;

  @media ${breakpoint.device.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${breakpoint.device.lg} {
    grid-template-columns: 2fr 3fr;
    gap: 2rem;
  }
`;

export const DetailsWrapper = styled.div`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
  display: grid;
  justify-items: start;
  justify-content: center;
  align-content: center;

  @media ${breakpoint.device.md} {
    justify-content: start;
  }
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 1rem;
`;

export const ShortDescription = styled.section`
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.5;
  margin-bottom: 8rem;
`;

export const PriceSection = styled.section`
  display: grid;
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: 2rem;
`;

export const Price = styled.section`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.md};
`;

export const RegularPrice = styled.section`
  color: ${({ theme }) => theme.color.gray3};
  text-decoration: line-through;
`;

export const CategoriesList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.font.size.xxs};
  padding: 0.5rem 1rem;
`;

export const StyledAccordion = styled(Accordion)`
  margin-top: 6rem;
`;
