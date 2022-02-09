import React from 'react';
import { graphql } from 'gatsby';

import { BUTTON } from 'atoms/Button';
import ProductGallery from 'molecules/ProductGallery';
import Accordion from 'molecules/Accordion';
import { STRING } from 'utils/constants';

import { ProductFragmentFragment, WpSimpleProduct, WpVariableProduct } from 'graphqlTypes';

import {
  ProductName,
  CategoriesList,
  ShortDescription,
  Price,
  PriceSection,
  RegularPrice,
  CategoryButton,
  Wrapper,
  DetailsWrapper,
  StyledAddToCartButton,
} from './ProductDetailsPage.styles';
import { PartialDeep } from 'type-fest';

const ProductDetailsPage = ({
  data: { product },
}: {
  data: { product: PartialDeep<WpSimpleProduct | WpVariableProduct> };
}) => {
  if (!product) return null;

  const renderPrice =
    product?.price && product?.onSale && product?.regularPrice ? (
      <PriceSection>
        {product.onSale ? (
          <RegularPrice dangerouslySetInnerHTML={{ __html: product.regularPrice }} />
        ) : null}
        <Price dangerouslySetInnerHTML={{ __html: product.price }} />
      </PriceSection>
    ) : null;

  const renderCategories = product?.productCategories ? (
    <CategoriesList>
      {product?.productCategories?.nodes?.map((category) => (
        <li key={category?.id}>
          <CategoryButton
            variant={BUTTON.VARIANT.CONTAINED}
            link={`/${STRING.CATEGORY}/${category?.name?.toLocaleLowerCase()}`}
          >
            {category?.name}
          </CategoryButton>
        </li>
      ))}
    </CategoriesList>
  ) : null;

  const renderButton = <StyledAddToCartButton productId={product?.databaseId!} />;

  return (
    <Wrapper>
      <ProductGallery
        image={product?.image}
        renderPrice={renderPrice}
        renderCategories={renderCategories}
        gallery={product?.galleryImages?.nodes}
      />
      <DetailsWrapper>
        <ProductName>{name}</ProductName>
        {renderCategories}
        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
        {renderPrice}
        {renderButton}
        <Accordion title="Opis" content={description} isAccordionOpen={false} />
        <Accordion title="Szczegóły" content={description} isAccordionOpen={false} />
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
