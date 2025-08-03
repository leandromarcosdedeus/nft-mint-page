import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private walletAddressSubject = new BehaviorSubject<string | null>(null);
  public walletAddress$ = this.walletAddressSubject.asObservable();

  setWalletAddress(address: string) {
    this.walletAddressSubject.next(address);
  }

  get currentWalletAddress(): string | null {
    return this.walletAddressSubject.value;
  }
}
