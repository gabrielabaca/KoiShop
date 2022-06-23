import { ProductoItem } from "../types/store";
// Productos
export const PRODUCTOS_REQUEST = 'PRODUCTOS_REQUEST';
export const PRODUCTOS_SUCCESS = 'PRODUCTOS_SUCCESS';
export const PRODUCTOS_FAILURE = 'PRODUCTOS_FAILURE';
export const UPDATE_CART = 'UPDATE_CART';

interface ProductosRequestAction {
    type: typeof PRODUCTOS_REQUEST;
}
  
interface ProductosSuccessAction {
    type: typeof PRODUCTOS_SUCCESS;
    data: [];
}
  
interface ProductosFailureAction {
    type: typeof PRODUCTOS_FAILURE;
    error: string;
}

interface UpdateCartAction {
  type: typeof UPDATE_CART;
  cart: number;
}

type InitActionTypes =
  | ProductosRequestAction
  | ProductosSuccessAction
  | ProductosFailureAction
  | UpdateCartAction



export interface ProductosState {
    data: ProductoItem[];
    page: number;
    pages: number;
    rowsPerPage: number;
    total: number;
    error: string;
    cart: number;
  }

const initialState: ProductosState = {
    data: [],
    page:1,
    pages: 1000000,
    rowsPerPage:10,
    total:10000000,
    error: '',
    cart: 0
};


export default (state: ProductosState = initialState, action: InitActionTypes): ProductosState => {
    switch (action.type) {
    
      case PRODUCTOS_SUCCESS:
        return {
          ...state,
          data: action.data.data,
          page: action.data.page,
          pages: action.data.pages,
          rowsPerPage: action.data.rowsPerPage,
          total: action.data.total,
        };
  
      case PRODUCTOS_FAILURE:
        return {
          ...state,
          error: action.error
        };
      
      case UPDATE_CART:
        return {
          ...state,
          cart: action.cart
        }
      default:
        return state;
    }
  };


  export const updateProducts = (data:[]) => ({ type: PRODUCTOS_SUCCESS, data });
  export const updateCart = (cart:number) => ({type: UPDATE_CART, cart})
