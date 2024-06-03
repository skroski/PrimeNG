import { Route } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'userList',
        component: UserComponent
    },
    {
        path: 'newUser',
        component: AddUserComponent
    }
];
