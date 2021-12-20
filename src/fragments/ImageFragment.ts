import { graphql } from 'gatsby';

export const query = graphql`
  fragment ImageFragment on WpMediaItem {
    id
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
