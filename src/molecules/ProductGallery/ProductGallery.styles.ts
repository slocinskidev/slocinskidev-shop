import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import breakpoint from 'utils/breakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100vh;
  max-height: 700px;
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  @media ${breakpoint.device.md} {
    padding: ${({ theme }) => theme.variable.paddingWrapper};
  }
`;

export const Slider = styled(Swiper)`
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }
`;
