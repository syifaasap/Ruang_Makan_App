/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import CONFIG from '../../global/config';

const createRestoItemTemplate = (resto) => `
	<div class="card">
		<figure>
			<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
			<figcaption>Kota ${resto.city}</figcaption>
		</figure>
		<div class="content">
			<p class="rating">⭐️ ${resto.rating}</p>
			<h2>${resto.name}</h2>
			<p class="description">${resto.description}</p>
			<button aria-label="${
        resto.name
      }" onClick="window.location.href='${`/#/detail/${resto.id}`}'">Details</button>
		</div>
	</div>
`;

function categoriesResto(resto) {
  return resto.categories.map((category) => category.name).join(', ');
}

function foodsResto(resto) {
  return resto.menus.foods
    .map(
      (food) => `
			<li>${food.name}</li>
		`
    )
    .join('');
}

function drinksResto(resto) {
  return resto.menus.drinks
    .map(
      (drink) => `
			<li>${drink.name}</li>
		`
    )
    .join('');
}

function customerReviews(resto) {
  return resto.customerReviews
    .map(
      (reviews) => `
			<div class="reviewer-resto">
				<div class="review-header">
					<p class="reviewer-name">${reviews.name}</p>
					<p class="reviewer-date">${reviews.date}</p>
				</div>
				<div class="review-body">${reviews.review}</div>
			</div>
		`
    )
    .join('');
}

const createRestoDetailTemplate = (resto) => `
	<div class="detail">
		<div class="img-resto">
			<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
		</div>
		<div class="info-resto">
			<h2>${resto.name}</h2>
			<p>${resto.address}, ${resto.city}</p>
			<p>⭐️ ${resto.rating} • Categories: ${categoriesResto(resto)}</p>
			<p>${resto.description}</p>
		</div>
		<div class="menu-resto">
			<div class="div">
				<h2 class="resto-label">Food's</h2>
				<ul>${foodsResto(resto)}</ul>
				</ul>
			</div>
			<div class="div">
				<h2 class="resto-label">Drinks's</h2>					
				<ul>${drinksResto(resto)}</ul>
			</div>
		</div>
		
		<div class="review-resto">
			<h2 class="resto-label">Customer Reviews</h2>
			${customerReviews(resto)}
		</div>
		<div class="add-review-form">
			<h1>Bagaiamana menurutmu ?</h1>
			<div id="formReviewContainer">
				<form class="form-submit">
					<label for="inputName">Ketikan nama Anda</label>
					<input type="text" name="nama" id="inputName" placeholder="Masukan nama" />
					<label for="inputReview">Ketikan pendapat Anda</label>
					<textarea name="review" id="inputReview" placeholder="Masukan review"></textarea>
					<button type="submit" id="submitReview">Kirim</button>
				</form>
			</div>
		</div>
	</div>
`;

const createLikeButtonTemplate = () => `
	<button aria-label="like this movie" id="likeButton" class="like">
		<i class="fa fa-heart-o" aria-hidden="true"></i>
	</button>
`;

const createLikedButtonTemplate = () => `
	<button aria-label="unlike this movie" id="likeButton" class="like">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
