/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import FavoriteRestoIdb from '../../data/ruangmakan-idb';
import { createRestoItemTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
			<section class="container">
				<div class="title">
					<h1>Favorite List</h1>
				</div>
				<div id="dishes" class="cards"></div>
			</section>
		`;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#dishes');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
