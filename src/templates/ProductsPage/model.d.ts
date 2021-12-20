export interface ProductsPageNodesType {
  productsPage: { title: string };
  allWpProduct: {
    nodes: CommonTypes.ProductType[];
  };
}

interface LocalFileType extends FileNode {
  extension: string;
  publicURL: string;
}

export interface ProductImageType {
  altText: string;
  localFile: LocalFileType;
}

export type ProductType = {
  id: string;
  image: ProductImageType;
  name: string;
  shortDescription: string;
  link: string;
};
