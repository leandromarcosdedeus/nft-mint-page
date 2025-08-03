import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WalletConnectComponent } from './shared/wallet-connect/wallet-connect';

@Component({
  selector: 'app-root',
   imports: [RouterOutlet, WalletConnectComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nft-mint-page');
}
