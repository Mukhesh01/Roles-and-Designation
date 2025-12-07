import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DesignationComponent } from './components/designation/designation.component';
import { RolesComponent } from './components/roles/roles.component';
import { EmployeeComponentComponent } from './components/employee-component/employee-component.component';
import { ClientComponentComponent } from './components/client-component/client-component.component';


export const routes: Routes = [
      {
        path:'',
        redirectTo:'master',
        pathMatch:'full'
    },
    {
        path:'master',
        component:MasterComponent
    },
    {
        path:'employee',
        component:EmployeeComponentComponent
    },
    {
        path:'client',
        component:ClientComponentComponent
    },
    {
        path:'designation',
        component:DesignationComponent
    },
    {
        path:'roles',
        component:RolesComponent
    }
];
