import React from 'react';
import { graphql } from 'gatsby';

import Button, { BUTTON } from 'atoms/Button';
import { STRING } from 'utils/constants';

import {
  ProductName,
  CategoriesList,
  Description,
  Price,
  PriceSection,
  RegularPrice,
  StyledButton,
  Wrapper,
  DetailsWrapper,
} from './ProductDetailsPage.styles';
import ProductGallery from 'molecules/ProductGallery';

const ProductDetailsPage = ({
  data: { product },
}: {
  data: { product: CommonTypes.ProductType };
}) => {
  if (!product) return null;

  const {
    name,
    description,
    image,
    galleryImages,
    price,
    regularPrice,
    productCategories,
  } = product;

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
      <ProductGallery image={image} gallery={galleryImages.nodes} />
      <DetailsWrapper>
        <ProductName>{name}</ProductName>
        {renderCategories}
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        {renderPrice}
        {renderButton}
      </DetailsWrapper>
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
