import { Routes } from '@angular/router';
import { MintComponent } from './pages/mint-component/mint-component';
import { MintNftComponent } from './pages/mint-nft/mint-nft';

export const routes: Routes = [
    {
        path: 'mint',
        component: MintComponent
    },
    {
        path: 'mint-nft',
        component: MintNftComponent
    },
    {
        path: '',
        redirectTo: 'mint',
        pathMatch: 'full'   
    }
];
