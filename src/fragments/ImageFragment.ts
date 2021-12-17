import { graphql } from 'gatsby';

export const query = graphql`
  fragment ImageFragment on WpMediaItem {
    altText
    localFile {
      extension
      publicURL
      childImageSharp {
        gatsbyImageData(
          formats: PNG
          pngOptions: { quality: 100 }
          placeholder: BLURRED
        )
      }
    }
  }
`;
