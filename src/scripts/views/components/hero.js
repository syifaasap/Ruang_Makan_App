/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<section class="hero">
      <div class="hero-img">
        <img src="./images/heros/hero-image.jpg" alt="" />
      </div>
      <div class="hero-caption">
        <h1>Welcome to Ruang Makan</h1>
        <article>
          <p>
            Discover entire dishes all you want <br/> Accomplish your hunger
          </p>
          <a href="#foods">Browse Foods</a>
        </article>          
      </div>
    </section>
		`;
	}
}

customElements.define('hero-header', Hero);
