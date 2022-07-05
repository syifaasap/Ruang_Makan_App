/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable no-console */
import RestoSource from '../data/ruangmakan-source';

const PostReview = async (url, name, review) => {
	console.log(url);
	const dataInput = {
		id: url.id,
		name,
		review,
	};

	const reviewContainer = document.querySelector('.review-resto');
	const reviewItemContainer = document.querySelector('.detail-review-item');
	const date = new Date().toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const newReview = `
	<div class="reviewer-resto">
		<div class="review-header">
			<p class="reviewer-name">${name} </p>
			<p class="reviewer-date">${date} </p>
		</div>
		<div class="review-body">${review}</div>
	</div>
	`;

	const reviewResponse = await RestoSource.postRestoReview(dataInput);
	console.log(reviewResponse);
	console.log(reviewContainer);
	console.log(reviewItemContainer);

	reviewContainer.innerHTML += newReview;
};

export default PostReview;
