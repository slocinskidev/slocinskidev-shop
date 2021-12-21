import styled from 'styled-components';
import RightArrow from 'atoms/SVG/RightArrow';

export const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 3rem;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const MoreText = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const StyledRightArrow = styled(RightArrow)`
  margin-left: 1rem;
  width: 25px;
`;
