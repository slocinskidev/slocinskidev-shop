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
    productId: number;
    link: string;
    description: string;
    shortDescription: string;
    image: ImageType;
    name: string;
    productCategories: {
      nodes: { id: string; name: string }[];
    };
    price: string;
    galleryImages: { nodes: ImageType[] };
    regularPrice: string;
    onSale: boolean;
  };

  type CartInfoType = {
    image: CommonTypes.ImageType;
    noProductText: string;
    noProductDescription: string;
    button: {
      title: string;
      uri: string;
    };
  };

  type ButtonType = {
    title: string;
    uri: string;
  };

  type HeroBannerType = {
    heading: string;
    description: string;
    image: ImageType;
    button: ButtonType;
  };

  type CartProductType = {
    key: string;
    quantity: number;
    total: string;
    product: {
      node: {
        name?: string;
        shortDescription: string;
        databaseId: number;
        sku: string;
        price: string;
      };
    };
  };

  type CartType = {
    subtotal?: string;
    total?: string;
    shippingTotal?: string;
    contents: {
      itemCount: number;
      nodes: CartProductType[];
    };
  };

  type SelectQuantityType = { label: string; value: number };
}
