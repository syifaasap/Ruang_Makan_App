/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/ruangmakan-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
	await LikeButtonInitiator.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		favoriteRestaurant: FavoriteRestaurantIdb,
		restaurant,
	});
};

export { createLikeButtonPresenterWithRestaurant };
