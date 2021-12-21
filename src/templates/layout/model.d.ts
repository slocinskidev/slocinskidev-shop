export interface LayoutQueryType {
  menu: {
    nodes: CommonTypes.NavigationType[];
  };
  footer: {
    footer: CommonTypes.FooterType;
  };
  header: {
    promoInfo: { promoInfo?: string };
  };
}
