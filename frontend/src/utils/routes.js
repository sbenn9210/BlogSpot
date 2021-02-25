import Home from '../pages/home/index';
import Publish from '../pages/publish/index';

const routes = [
  {
    path: '/',
    component: Home,
    protected: true,
  },
  {
    path: '/publish',
    component: Publish,
    protected: false,
  },
];
export default routes;
