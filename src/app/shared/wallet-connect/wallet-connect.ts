import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { WalletService } from '../wallet.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet-connect',
  templateUrl: './wallet-connect.html',
  styleUrls: ['./wallet-connect.scss'],
    imports: [CommonModule],

})
export class WalletConnectComponent implements OnInit {
  walletAddress$!: Observable<string | null>;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.walletAddress$ = this.walletService.walletAddress$;
    this.checkIfWalletIsConnected();
  }

  async checkIfWalletIsConnected() {
    if ((window as any).ethereum) {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send('eth_accounts', []);
      if (accounts.length > 0) {
        this.walletService.setWalletAddress(accounts[0]);
      }
    }
  }

  async connectWallet() {
    if ((window as any).ethereum) {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      try {
        const accounts = await provider.send('eth_requestAccounts', []);
        this.walletService.setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Erro ao conectar a carteira:', error);
      }
    } else {
      alert('Instale o Metamask para continuar.');
    }
  }
}
