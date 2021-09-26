import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage';
import GuidePage from '@/views/GuidePage';
import NotFoundPage from '@/views/NotFoundPage';
import ApiPage from '@/views/ApiPage';
import RankPage from '@/views/RankPage';
import ResultPage from '@/views/ResultPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/guide',
    component: GuidePage,
  },
  {
    path: '/problem',
    component: ApiPage,
  },
  {
    path: '/result',
    component: ResultPage,
  },
  {
    path: '/rank',
    component: RankPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
