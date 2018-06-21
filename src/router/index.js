import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home';
import Film from '@/components/film';
import Detail from '@/components/detail';
import NowPlaying from '@/components/nowPlaying';
import ComingSoon from '@/components/comingSoon';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/film',
      component: Film,
      children : [
        { path : 'now-playing' , component : NowPlaying },
        { path : 'coming-soon' , component : ComingSoon }
      ],
      redirect : '/film/now-playing'
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/*',
      redirect : '/home'	
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})
