import { Node } from 'gatsby';
import { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';

type IGatsbyImageDataParent<T = never> = T & {
  gatsbyImageData: IGatsbyImageData;
};

type FileNode = Node & {
  childImageSharp?: IGatsbyImageDataParent<Node>;
};

type LocalFileType = Node & {
  extension: string;
  publicURL: string;
};

export type ImageType = {
  id: string;
  altText: string;
  localFile: LocalFileType;
};
