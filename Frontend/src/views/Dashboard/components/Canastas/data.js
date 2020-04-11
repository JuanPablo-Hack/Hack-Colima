import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Platano',
    imageUrl: 'images/products/banana.jpg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Manzana',
    imageUrl: 'images/products/manzana.jpg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Detergente',
    imageUrl: 'images/products/detergente.jpg',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Salvo',
    imageUrl: 'images/products/salvo.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Bla bla',
    imageUrl: 'images/products/desodorante.jpg',
    updatedAt: moment().subtract(9, 'hours')
  }
];