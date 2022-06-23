import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateCart } from '../store/store';

export default function useLoading() {
  const dispatch = useDispatch();

  const fetchUpdateCart = useCallback((cart: number) => dispatch(updateCart(cart)), [dispatch]);

  return {
    fetchUpdateCart,
  };
}
