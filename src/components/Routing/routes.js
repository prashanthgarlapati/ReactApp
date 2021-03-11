import HomeComponent from '../Home/Home';
import NameForm from '../UserForm/UserForm.component';
import UserDataTable from '../UserDataTable/UserDataTable';
import UserDetails from '../UserDetails/UserDetails';

export const homeRoute = {
    component: HomeComponent,
    default: true,
    path: '/',
    key: 'home-route'
};

export const usersRoute = {
    component: NameForm,
    default: false,
    path: '/users',
    key: 'users-route'
};

export const userData = {
    component: UserDataTable,
    default: false,
    path: '/userData',
    key: 'userData-route'
};

export const userDetails = {
    component: UserDetails,
    default: false,
    path: '/userDetails',
    key: 'userDetails-route'
};

export const Routes = [homeRoute, usersRoute, userData, userDetails];

export default Routes;