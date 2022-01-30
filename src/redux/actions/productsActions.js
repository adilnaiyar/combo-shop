import { ActionTypes } from "../constants/action-types";
import comboShopApi from "../../api/comboShopApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await comboShopApi.get("/products");
    dispatch(setProducts(response.data));
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProductDetail = (id) => {
  return async (dispatch) => {
    const response = await comboShopApi.get(`/products/${id}`);
    dispatch(selectedProduct(response.data));
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
