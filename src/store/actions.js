import axios from 'axios';
import { Message } from 'element-ui';

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS,
} from './mutation-types';

const API_BASE = 'http://localhost:3000/api/v1';

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);

    axios
      .get(`${API_BASE}/products`)
      .then((response) => {
        commit(ALL_PRODUCTS_SUCCESS, {
          products: response.data,
        });
      });
  },

  addProduct({ commit }, payload) {
    commit(ADD_PRODUCT);

    const { product } = payload;
    axios
      .post(`${API_BASE}/products`, product)
      .then((response) => {
        commit(ADD_PRODUCT_SUCCESS, {
          product: response.data,
        });
        Message({
          message: '商品添加成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('商品添加失败，请重试！');
      });
  },

  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);

    const { productId } = payload;
    axios.get(`${API_BASE}/products/${productId}`)
      .then((response) => {
        commit(PRODUCT_BY_ID_SUCCESS, {
          product: response.data,
        });
      });
  },

  updateProduct({ commit }, payload) {
    commit(UPDATE_PRODUCT);

    const { product } = payload;
    axios
      .put(`${API_BASE}/products/${product._id}`, product)
      .then(() => {
        commit(UPDATE_PRODUCT_SUCCESS, {
          product,
        });
        Message({
          message: '商品修改成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('商品修改失败，请重试！');
      });
  },

  removeProduct({ commit }, payload) {
    commit(REMOVE_PRODUCT);

    const { productId } = payload;
    axios
      .delete(`${API_BASE}/products/${productId}`)
      .then(() => {
        // 返回productId, 用于删除本地商品
        commit(REMOVE_PRODUCT_SUCCESS, {
          productId,
        });
        Message({
          message: '商品删除成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('商品删除失败，请重试！');
      });
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);

    axios
      .get(`${API_BASE}/manufacturers`)
      .then((response) => {
        commit(ALL_MANUFACTURERS_SUCCESS, {
          manufacturers: response.data,
        });
      });
  },

  addManufacturer({ commit }, payload) {
    commit(ADD_MANUFACTURER);

    const { manufacturer } = payload;
    axios
      .post(`${API_BASE}/manufacturers`, manufacturer)
      .then((response) => {
        commit(ADD_MANUFACTURER_SUCCESS, {
          manufacturer: response.data,
        });
        Message({
          message: '制造商添加成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('制造商添加失败，请重试！');
      });
  },

  manufacturerById({ commit }, payload) {
    commit(MANUFACTURER_BY_ID);

    const { manufacturerId } = payload;
    axios
      .get(`${API_BASE}/manufacturers/${manufacturerId}`)
      .then((response) => {
        commit(MANUFACTURER_BY_ID_SUCCESS, {
          manufacturer: response.data,
        });
      });
  },

  updateManufacturer({ commit }, payload) {
    commit(UPDATE_MANUFACTURER);

    const { manufacturer } = payload;
    axios
      .put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer)
      .then((response) => {
        commit(UPDATE_MANUFACTURER_SUCCESS, {
          manufacturer: response.data,
        });
        Message({
          message: '制造商修改成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('制造商修改失败，请重试！');
      });
  },

  removeManufacturer({ commit }, payload) {
    commit(REMOVE_MANUFACTURER);

    const { manufacturerId } = payload;
    axios
      .delete(`${API_BASE}/manufacturers/${manufacturerId}`)
      .then(() => {
        commit(REMOVE_MANUFACTURER_SUCCESS, {
          manufacturerId,
        });
        Message({
          message: '制造商删除成功！',
          type: 'success',
        });
      })
      .catch(() => {
        Message.error('制造商删除失败，请重试！');
      });
  },
};
