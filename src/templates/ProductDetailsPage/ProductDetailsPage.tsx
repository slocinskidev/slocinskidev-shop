import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { ProductName } from 'organisms/ProductList/styles';
import { STRING } from 'utils/constants';

import {
  CategoriesList,
  Description,
  Price,
  PriceSection,
  RegularPrice,
  StyledGatsbyImage,
  StyledButton,
  Wrapper,
} from './styles';
import Button, { BUTTON } from 'atoms/Button';

const ProductDetailsPage = ({
  data: { product },
}: {
  data: { product: CommonTypes.ProductType };
}) => {
  if (!product) return null;

  const { name, description, image, price, regularPrice, productCategories } =
    product;

  const gatsbyImage = getImage(image.localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={image.altText} />
  ) : null;

  const renderPrice = price ? (
    <PriceSection>
      <Price dangerouslySetInnerHTML={{ __html: price }} />
      {regularPrice && (
        <RegularPrice dangerouslySetInnerHTML={{ __html: regularPrice }} />
      )}
    </PriceSection>
  ) : null;

  const renderCategories = productCategories ? (
    <CategoriesList>
      {productCategories.nodes?.map(({ id, name }) => (
        <li key={id}>
          <StyledButton
            variant={BUTTON.VARIANT.CONTAINED}
            link={`/${STRING.CATEGORY}/${name.toLocaleLowerCase()}`}
          >
            {name}
          </StyledButton>
        </li>
      ))}
    </CategoriesList>
  ) : null;

  const renderButton = (
    <Button variant={BUTTON.VARIANT.CONTAINED} isIcon>
      Add to cart
    </Button>
  );

  return (
    <Wrapper>
      {renderImage}
      <ProductName>{name}</ProductName>
      {renderCategories}
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      {renderPrice}
      {renderButton}
    </Wrapper>
  );
};

export const query = graphql`
  query ProductDetailsQuery($id: String) {
    product: wpProduct(id: { eq: $id }) {
      ...ProductFragment
    }
  }
`;

export default ProductDetailsPage;
