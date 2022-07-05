/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus restoran dengan meng-copy restoran yang ada
    // kecuali restoran dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurant = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
