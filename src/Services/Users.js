import axios from 'axios';
import ENV from '../env';

const { API_URL } = ENV;

export const UsersAPI = {
  createUser,
  login,
  addAddress,
};

async function createUser(data){
  return axios({
    method: 'POST',
    url: `${API_URL}users/register`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function login(data){
  return axios({
    method: 'POST',
    url: `${API_URL}users/login`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function addAddress(data){
  return axios({
    method: 'POST',
    headers: {
      Authorization: `Bearer {JWTHere}`
    },
    url: `${API_URL}users/address`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}