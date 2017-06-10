// import modules
import Vue from 'vue'
import VueCarousel from 'vue-carousel';

// import vues
import App from './App.vue'
import Carousel from './Carousel.vue'

new Vue({
  el: '#app',
  render: h => h(App),
})

//loading our carousel
Vue.use(VueCarousel);

new Vue({
	el: '#carousel',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  render: h => h(Carousel),
});
