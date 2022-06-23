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
    page: number;
    pages: number;
    rowsPerPage: number;
    total: number;
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
    rowsPerPage: string;
    total: number;
    error: string;
    cart: number;
  }

const initialState: ProductosState = {
    data: [
      {
        name: 'Producto1',
        price: 125,
        stock: 10,
        id: '0001',
        image: 'https://source.unsplash.com/random?sig=1'
      },
      {
        name: 'Producto2',
        price: 126,
        stock: 8,
        id: '0002',
        image: 'https://source.unsplash.com/random?sig=1'
      },
      {
        name: 'Producto3',
        price: 127,
        stock: 3,
        id: '0003',
        image: 'https://source.unsplash.com/random?sig=1'
      },
      {
        name: 'Producto4',
        price: 128,
        stock: 0,
        id: '0004',
        image: 'https://source.unsplash.com/random?sig=1'
      }
    ],
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
          data: action.data,
          page: action.page,
          pages: action.pages,
          rowsPerPage: action.rowsPerPage,
          total: action.total,
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


  export const productosRequest = (callback: (data: []) => void) => ({ type: PRODUCTOS_REQUEST, callback });
  export const updateCart = (cart:number) => ({type: UPDATE_CART, cart})
