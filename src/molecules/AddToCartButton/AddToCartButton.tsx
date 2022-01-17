import React from 'react';
import { isApolloError, useMutation } from '@apollo/client';

import Button, { BUTTON } from 'atoms/Button';

import ADD_TO_CART from 'mutations/add-to-cart';

import { StyledRightArrow } from './AddToCartButton.styles';

const AddToCartButton = ({
  product,
  className,
}: {
  product: CommonTypes.ProductType;
  className?: string;
}) => {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART, {
    refetchQueries: ['Cart'],
    awaitRefetchQueries: true,
  });

  const handleAddToCart = async () => {
    try {
      await addToCart({
        variables: {
          productId: product.productId,
        },
      });
    } catch (error) {
      if (error instanceof Error && isApolloError(error)) {
        console.error(error.message, { severity: 'error' });
      }
    }
  };

  return (
    <Button
      className={className}
      onClick={handleAddToCart}
      variant={BUTTON.VARIANT.CONTAINED}
      icon={<StyledRightArrow />}
    >
      {loading ? 'Trwa dodawanie...' : 'Dodaj do koszyka'}
    </Button>
  );
};

export default AddToCartButton;
