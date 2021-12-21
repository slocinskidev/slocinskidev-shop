export interface HomePageNodesType {
  homePage: {
    heroBanner: CommonTypes.HeroBannerType;
    recentProductsSection: {
      recentProductsHeading: string;
      recentProductsButton: { title: string; url: string };
    };
  };
  allWpProduct: {
    nodes: CommonTypes.ProductType[];
  };
}
