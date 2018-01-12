import 'hammerjs/hammer';
import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import './style.scss';

import Vue from 'vue/dist/vue.js';

new Vue({
  el: '#app',
  template: `
    <h5>Hey {{ name }}!</h5>
  `,
  data() {
    return {
      name: 'Maksimko, Parcel bundler and Vue.js',
    };
  },
});
