import { Routes } from '@angular/router';
import { MintComponent } from './pages/mint-component/mint-component';

export const routes: Routes = [
    {
        path: 'mint',
        component: MintComponent
    },
    {
        path: '',
        redirectTo: 'mint',
        pathMatch: 'full'   
    }
];
