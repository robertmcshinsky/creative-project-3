import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => console.log(data));


  const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

  const select = document.querySelector('.breeds');

  fetch(BREEDS_URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const breedsObject = data.message;
      const breedsArray = Object.keys(breedsObject);
      for (let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);
      }
      console.log(breedsArray);
    });

  select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    getDoggo(url);
  });

  const img = document.querySelector('.dog-img');
  const spinner = document.querySelector('.spinner');

  const getDoggo = url => {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        img.src = data.message;
      });
  };

  img.addEventListener('load', () => {
    spinner.classList.remove('show');
    img.classList.add('show');
  });
