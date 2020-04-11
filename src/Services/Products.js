import axios from 'axios';
import ENV from '../env';

const { API_URL } = ENV;

export const ProductsAPI = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
};

async function createProduct(data){
  return axios({
    method: 'POST',
    url: `${API_URL}products`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function getProducts(){
  return axios({
    method: 'GET',
    url: `${API_URL}products`
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function updateProduct(IDProduct, data){
  return axios({
    method: 'PUT',
    url: `${API_URL}products/${IDProduct}`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function deleteProduct(IDProduct){
  return axios({
    method: 'DELETE',
    url: `${API_URL}products/${IDProduct}`
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}