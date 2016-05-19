import App from './App';
import todoRoutes from '../todo/todoRoutes';

export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: App,
    childRoutes: [
      ...todoRoutes,
    ],
  }],
};
