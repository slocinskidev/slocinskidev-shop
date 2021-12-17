export interface LayoutQueryType {
  wpMenu: {
    menuItems: {
      nodes: CommonTypes.NavigationType[];
    };
  };
  wpLayout: {
    footer: CommonTypes.FooterType;
  };
}
