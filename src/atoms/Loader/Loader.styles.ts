import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

export const LoaderAnimation = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.color.secondary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: ${rotation} 1s linear infinite;
`;
