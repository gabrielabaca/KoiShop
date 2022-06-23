import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateCart, updateProducts } from '../store/store';

export default function useLoading() {
  const dispatch = useDispatch();

  const fetchUpdateCart = useCallback((cart: number) => dispatch(updateCart(cart)), [dispatch]);
  const fetchUpdateProducts = useCallback((allData: [])=> dispatch(updateProducts(allData)),[dispatch])

  return {
    fetchUpdateCart,
    fetchUpdateProducts
  };
}
