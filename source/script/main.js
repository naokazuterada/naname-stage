import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/app.vue';

Vue.use(VueRouter);

var userAgent = window.navigator.userAgent.toLowerCase();

// iPhoneでLandscapeにした時に見にくくなるのを何とかする
var setViewportByOrientation = function(){
  var vp = document.querySelector('head>meta[name="viewport"]');
  switch (window.orientation) {
  case 0:
  case 180:
    // Portrait
    vp.content = 'width=640';
    break;
  case -90:
  case 90:
    // Landscape
    vp.content = 'width=1320';
    break;
  }
};

var ua = window.navigator.userAgent;

if(ua.toLowerCase().indexOf('fban/fbios;fbav') != -1){
  // Facebook InApp Browser
  document.querySelector('body').classList.add('fb_in_app_browser');
  // 下記でスクロールをOFFにできるが、サイト全体に影響してしまう
  // $(window).on('touchmove.noScroll', function(e) {
  //   e.preventDefault();
  // });
  // スクロール復活
  // $(window).off('.noScroll');
}
else if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
  document.querySelector('body').classList.add('mobile');
  setViewportByOrientation();
  window.addEventListener('orientationchange', setViewportByOrientation);
}
else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
  document.querySelector('body').classList.add('pad');
  // TODO 正規表現でwidthだけ変える
  var vp = document.querySelector('head>meta[name="viewport"]');
  vp.content = 'width=1150';
}
else if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
  document.querySelector('body').classList.add('ie');
}
else if(userAgent.indexOf('edge') != -1) {
  document.querySelector('body').classList.add('edge');
}
else if(userAgent.indexOf('chrome') != -1) {
  document.querySelector('body').classList.add('chrome');
}
else if(userAgent.indexOf('safari') != -1) {
  document.querySelector('body').classList.add('safari');
}
else if(userAgent.indexOf('firefox') != -1) {
  document.querySelector('body').classList.add('firefox');
}
else if(userAgent.indexOf('opera') != -1) {
  document.querySelector('body').classList.add('opera');
}
else {
  //
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: require('../components/page/top.vue').default
    }
  ]
});

new App({
  router: router
}).$mount('#app');
