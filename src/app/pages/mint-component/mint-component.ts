import { Component, ChangeDetectorRef } from '@angular/core';
import { ethers } from 'ethers';
import { CommonModule } from '@angular/common';

export interface NFT {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-mint-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mint-component.html',
  styleUrl: './mint-component.scss',
})
export class MintComponent {
   nfts: NFT[] = [];
   currentIndex: number = 0;
   totalSlides: number = 3;

  ngOnInit(): void {
    this.nfts = [
      {
        id: 1,
        name: 'RAIZAN STARTER DECK',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Trading Card Game Alpha Version'
      },
      {
        id: 2,
        name: 'SHAO STARTER DECK',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Trading Card Game Alpha Version'
      },
      {
        id: 3,
        name: 'EP.2 - FRACTURED REFLECTIONS',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Anthology Series'
      },
      {
        id: 4,
        name: 'EP.1 - THE WAITING MAN',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Anthology Series'
      },
      {
        id: 5,
        name: 'SISTERS',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Story Animation'
      },
      {
        id: 6,
        name: 'AZUKI X SATOSHI NA',
        image: 'https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75',
        description: 'Streetwear Collab'
      }
    ];
  }

  nextSlide(): void {
    const maxIndex = this.nfts.length - this.totalSlides;
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
  }

  prevSlide(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getVisibleSlides(): NFT[] {
    const startIndex = this.currentIndex;
    const endIndex = Math.min(startIndex + this.totalSlides, this.nfts.length);
    return this.nfts.slice(startIndex, endIndex);
  }

  getDotIndicators(): number[] {
    const totalPages = Math.ceil(this.nfts.length / this.totalSlides);
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  getCurrentDotIndex(): number {
    return Math.floor(this.currentIndex / this.totalSlides);
  }

  canGoNext(): boolean {
    return this.currentIndex < this.nfts.length - this.totalSlides;
  }

  canGoPrev(): boolean {
    return this.currentIndex > 0;
  }
}

