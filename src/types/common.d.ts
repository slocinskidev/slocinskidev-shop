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
    image: ImageType;
    name: string;
    shortDescription: string;
    link: string;
  };
}
