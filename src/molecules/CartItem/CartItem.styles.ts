import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray6};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.sm};
`;
