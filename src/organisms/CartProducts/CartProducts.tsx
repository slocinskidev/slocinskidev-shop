import React, { useContext, useEffect } from 'react';

import CartItem from 'molecules/CartItem';
import PriceDetails from 'molecules/PriceDetails';
import { CartContext } from 'providers/CartProvider';
import { useLazyQuery, useMutation } from '@apollo/client';

import { ContextType } from 'providers/model';

import { BasketSection, StyledPageTitle, Wrapper } from './CartProducts.styles';
import Button, { BUTTON } from 'atoms/Button';
import { v4 } from 'uuid';
import GET_CART from 'queries/get-cart';
import REMOVE_ITEM_FROM_CART from 'mutations/clear-cart';
import CartInfo from 'molecules/CartInfo';
import { isBrowser } from 'utils/isBrowser';
import UPDATE_CART from 'mutations/update-cart';

const CartProducts = ({
  cartHeading,
  cartInfo,
}: {
  cartHeading: string;
  cartInfo: CommonTypes.CartInfoType;
}) => {
  const { cart, setCart } = useContext(CartContext) as ContextType;

  const [maybeGetCart, { loading, refetch }] = useLazyQuery<{ cart: CommonTypes.CartType }>(
    GET_CART,
    {
      onCompleted: ({ cart }) => {
        setCart(cart);
      },
    },
  );

  const [removeAllItems, { loading: loadingMutation }] = useMutation(REMOVE_ITEM_FROM_CART, {
    onCompleted() {
      setCart(undefined);
    },
    update(cache) {
      cache.writeQuery({
        query: GET_CART,
        data: undefined,
      });
    },
  });

  const [updateCart, { loading: updateCartProcessing }] = useMutation(UPDATE_CART, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      if (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (cart) {
      return;
    }

    maybeGetCart();
  }, [cart, maybeGetCart]);

  if (loading) {
    return <h2>Loading cart...</h2>;
  }

  if (loadingMutation) {
    return <h2>Updating cart...</h2>;
  }

  if (cart && cart.contents.itemCount === 0) {
    return <CartInfo cartInfo={cartInfo} />;
  }

  const removeProductFromCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: string,
  ) => {
    if (!isBrowser) return null;
    e.stopPropagation();

    updateCart({
      variables: {
        input: {
          items: [{ key, quantity: 0 }],
        },
      },
    });
  };

  console.log(cart);

  const renderCartItems =
    cart &&
    cart?.contents.nodes?.map((product: CommonTypes.CartProductType) => (
      <CartItem
        key={product.key}
        product={product}
        removeProductFromCart={removeProductFromCart}
        refetch={refetch}
      />
    ));

  return (
    <Wrapper>
      <BasketSection>
        <StyledPageTitle>{cartHeading}</StyledPageTitle>
        <ul>{renderCartItems}</ul>
        <Button
          variant={BUTTON.VARIANT.CONTAINED}
          onClick={() =>
            removeAllItems({
              variables: {
                input: {
                  clientMutationId: v4(),
                  all: true,
                },
              },
            })
          }
        >
          Wyczyść koszyk
        </Button>
      </BasketSection>
      <PriceDetails />
    </Wrapper>
  );
};

export default CartProducts;
