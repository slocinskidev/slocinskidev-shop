type CommonPageQuery = {
  title: string;
  uri: string;
};

type ProductDetailsNodeType = {
  id: string;
  link: string;
  name: string;
};

export type HomePageQuery = {
  homePage: CommonPageQuery;
};

export type ProductsPageQuery = {
  productsPage: CommonPageQuery;
};

export type CartPageQuery = {
  cartPage: CommonPageQuery;
};

export type ProductDetailsPageQuery = {
  productDetailsPage: {
    nodes: ProductDetailsNodeType[];
  };
};
