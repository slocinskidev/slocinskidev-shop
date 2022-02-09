import React from 'react';
import { isApolloError } from '@apollo/client';

import Button, { BUTTON } from 'atoms/Button';

import { StyledRightArrow } from './AddToCartButton.styles';
import { useAddToCartMutation } from 'apolloTypes';

type AddToCartProps = {
  productId: number;
  className?: string;
};

const AddToCartButton = ({ productId, className }: AddToCartProps) => {
  const [addToCart, { loading }] = useAddToCartMutation({
    refetchQueries: ['Cart'],
    awaitRefetchQueries: true,
  });

  const handleAddToCart = async () => {
    try {
      await addToCart({
        variables: {
          productId,
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
