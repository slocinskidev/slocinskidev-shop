import React from 'react';
import { graphql } from 'gatsby';

import Button, { BUTTON } from 'atoms/Button';
import ProductGallery from 'molecules/ProductGallery';
import { STRING } from 'utils/constants';

import {
  ProductName,
  CategoriesList,
  ShortDescription,
  Price,
  PriceSection,
  RegularPrice,
  StyledButton,
  Wrapper,
  DetailsWrapper,
  StyledAccordion,
  StyledRightArrow,
} from './ProductDetailsPage.styles';

const ProductDetailsPage = ({
  data: { product },
}: {
  data: { product: CommonTypes.ProductType };
}) => {
  if (!product) return null;

  const {
    name,
    shortDescription,
    description,
    image,
    galleryImages,
    price,
    regularPrice,
    productCategories,
  } = product;

  const renderPrice = price ? (
    <PriceSection>
      {regularPrice && (
        <RegularPrice dangerouslySetInnerHTML={{ __html: regularPrice }} />
      )}
      <Price dangerouslySetInnerHTML={{ __html: price }} />
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
    <Button variant={BUTTON.VARIANT.CONTAINED} icon={<StyledRightArrow />}>
      Dodaj do koszyka
    </Button>
  );

  return (
    <Wrapper>
      <ProductGallery image={image} gallery={galleryImages.nodes} />
      <DetailsWrapper>
        <ProductName>{name}</ProductName>
        {renderCategories}
        <ShortDescription
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
        {renderPrice}
        {renderButton}
        <StyledAccordion
          title="Opis produktu"
          content={description}
          isAccordionOpen
        />
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
