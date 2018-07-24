import HomePage from 'views/home.js';
import OnePage from 'views/one.js';
import TwoPage from 'views/two.js';

import { Home, AccountCircle, Help } from '@material-ui/icons';

export default
[
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    icon: Home,
  },
  {
    path: '/account',
    name: 'Account',
    component: OnePage,
    icon: AccountCircle,
  },
  {
    path: '/help',
    name: 'Help',
    component: TwoPage,
    icon: Help,
  },
];
