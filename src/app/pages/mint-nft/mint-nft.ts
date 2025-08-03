import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ethers } from 'ethers';

// Declaração do tipo ethereum para MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface NFT {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-mint-nft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mint-nft.html',
  styleUrl: './mint-nft.scss',
})
export class MintNftComponent {
  nfts: NFT[] = [];
  selectedNft: NFT | null = null;
  isMinting = false;
  mintStatus = '';

  ngOnInit(): void {
    this.nfts = [
      {
        id: 1,
        name: 'RAIZAN STARTER DECK',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Trading Card Game Alpha Version',
        price: '0.1 ETH'
      },
      {
        id: 2,
        name: 'SHAO STARTER DECK',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Trading Card Game Alpha Version',
        price: '0.1 ETH'
      },
      {
        id: 3,
        name: 'EP.2 - FRACTURED REFLECTIONS',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Anthology Series',
        price: '0.05 ETH'
      }
    ];
  }

  selectNft(nft: NFT): void {
    this.selectedNft = nft;
  }

  async mintNft(): Promise<void> {
    if (!this.selectedNft) {
      this.mintStatus = 'Por favor, selecione um NFT primeiro';
      return;
    }

    this.isMinting = true;
    this.mintStatus = 'Conectando à carteira...';

    try {
      // Verificar se MetaMask está instalado
      if (typeof window.ethereum === 'undefined') {
        this.mintStatus = 'MetaMask não encontrado. Por favor, instale a extensão.';
        return;
      }

      // Solicitar conexão da carteira
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      this.mintStatus = 'Preparando transação...';

      // Aqui você implementaria a lógica real de mint
      // Por enquanto, simularemos o processo
      await this.simulateMintProcess();

      this.mintStatus = `NFT "${this.selectedNft.name}" mintado com sucesso!`;
      
    } catch (error) {
      console.error('Erro ao mintar NFT:', error);
      this.mintStatus = 'Erro ao mintar NFT. Tente novamente.';
    } finally {
      this.isMinting = false;
    }
  }

  private async simulateMintProcess(): Promise<void> {
    // Simulação do processo de mint
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
}
