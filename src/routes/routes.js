import HomePage from 'views/home.js';
import OnePage from 'views/one.js';
import TwoPage from 'views/two.js';
import Qod from 'views/qod.js';

import { Home, LooksTwo, PlusOne, DateRange } from '@material-ui/icons';

export default
[
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    icon: Home,
  }, 
  {
    path: '/one',
    name: 'One',
    component: OnePage,
    icon: PlusOne,
  }, 
  {
    path: '/two',
    name: 'Two',
    component: TwoPage,
    icon: LooksTwo,
  },
  {
    path: '/qod',
    name: 'Quotes',
    component: Qod,
    icon: DateRange,
  },
];
