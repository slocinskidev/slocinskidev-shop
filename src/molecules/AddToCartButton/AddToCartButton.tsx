import React, { useContext } from 'react';

import Button, { BUTTON } from 'atoms/Button';
import { CartContext } from 'providers/CartProvider';

import { StyledRightArrow } from './AddToCartButton.styles';
import ADD_TO_CART from 'mutations/add-to-cart';
import { useMutation } from '@apollo/client';
import { v4 } from 'uuid';

const AddToCartButton = ({
  product,
  className,
}: {
  product: CommonTypes.ProductType;
  className?: string;
}) => {
  const { setCart } = useContext(CartContext);

  const productQtyInput = {
    clientMutationId: v4(),
    productId: product?.productId,
  };

  const [addToCart, { loading }] = useMutation(ADD_TO_CART, {
    onCompleted: ({ addToCart: { cart } }: { addToCart: { cart: CommonTypes.CartType } }) => {
      console.log({
        title: 'Added to cart',
        status: 'success',
      });

      setCart(cart);
    },
    onError: () => {
      console.log({
        title: 'Error',
        description: 'There was an error adding your product',
        status: 'error',
      });
    },
  });

  function handleAddToCart() {
    addToCart({
      variables: { input: productQtyInput },
    });
  }

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
