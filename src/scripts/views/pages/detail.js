/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/ruangmakan-source';
import { createRestoDetailTemplate } from '../templates/template-creators';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-reviews';

const Detail = {
  async render() {
    return `
			<section class="container">
			<div class="title">
					<h1>Detail Restaurant</h1>
			</div>
			<div id="dishes" class="resto-details"></div>
			<div id="likeButtonContainer"></div>
			</section>
		`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#dishes');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const submitReview = document.querySelector('#submitReview');
    const reviewName = document.querySelector('#inputName');
    const reviewContent = document.querySelector('#inputReview');

    submitReview.addEventListener('click', async (e) => {
      e.preventDefault();
      await PostReview(url, reviewName.value, reviewContent.value);

      reviewName.value = '';
      // reviewInput.value = '';
    });
  },
};

export default Detail;
