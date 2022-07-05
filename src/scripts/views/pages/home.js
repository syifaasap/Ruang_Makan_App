/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
import '../components/hero';
import RestoSource from '../../data/ruangmakan-source';
import { createRestoItemTemplate } from '../templates/template-creators';

const Home = {
  async render() {
    return `
			<hero-header></hero-header>
			<section class="container">
				<div class="title">
					<h1>Explore Restaurant</h1>
				</div>
				<div id="dishes" class="cards"></div>
			</section>
		`;
  },

  async afterRender() {
    const restaurants = await RestoSource.listResto();
    const restoContainer = document.querySelector('#dishes');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
