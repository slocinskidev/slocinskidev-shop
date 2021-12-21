import styled from 'styled-components';
import Button from 'atoms/Button';
import breakpoint from 'utils/breakpoints';

export const Wrapper = styled.section`
  display: grid;
  margin-top: 4rem;

  @media ${breakpoint.device.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }
`;

export const DetailsWrapper = styled.div`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  margin: 2rem 0 1rem;
`;

export const Description = styled.section`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 4rem;
`;

export const PriceSection = styled.section`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: 2rem;
`;

export const Price = styled.section`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const RegularPrice = styled.section`
  margin-left: 1rem;
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
