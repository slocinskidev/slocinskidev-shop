declare namespace CommonTypes {
  type ImageType = import('./gatsby-image').ImageType;

  interface NavigationType {
    label: string;
    path: string;
  }

  interface FooterType {
    description: string;
    url: {
      name?: string;
      url: string;
    };
  }

  type ProductType = {
    id: string;
    link: string;
    description: string;
    image: ImageType;
    name: string;
    productCategories: {
      nodes: { id: string; name: string }[];
    };
    price: string;
    galleryImages: { nodes: ImageType[] };
    regularPrice?: string;
  };
}
