import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicatinListComponent } from './pages/applicatin-list/applicatin-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'newApplication',
        pathMatch: 'full'
    },
    {
        path: 'newApplication',
        component:LoanApplicationComponent
    },
    {
        path: 'applicationList',
        component:ApplicatinListComponent
    }
];
