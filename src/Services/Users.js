import axios from 'axios';
import ENV from '../env';

import authHeader from "./Utils";

const { API_URL } = ENV;

export const UsersAPI = {
  createUser,
  login,
  addAddress,
  getProfile,
  addDevice
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
    headers: authHeader(),
    url: `${API_URL}users/address`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function getProfile(){
  return axios({
    method: 'GET',
    headers: authHeader(),
    url: `${API_URL}USERS`
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}

async function addDevice(data){
  return axios({
    method: 'POST',
    headers: authHeader(),
    url: `${API_URL}users/device`,
    data
  }).then((response) => {
    let { data } = response;

    return data;
  }, error => {
    console.log(error);
  });
}