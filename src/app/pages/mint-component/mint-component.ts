import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
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
   totalSlides: number = 4.5;
   @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

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
    if (this.carouselWrapper) {
      const cardWidth = 280 + 8; // card width + gap (0.5rem = 8px)
      const scrollAmount = cardWidth * 1.5; // Scroll 1.5 cards
      this.carouselWrapper.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  prevSlide(): void {
    if (this.carouselWrapper) {
      const cardWidth = 280 + 8; // card width + gap (0.5rem = 8px)
      const scrollAmount = cardWidth * 1.5; // Scroll 1.5 cards
      this.carouselWrapper.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  goToSlide(index: number): void {
    if (this.carouselWrapper) {
      const cardWidth = 280 + 8; // card width + gap (0.5rem = 8px)
      const scrollAmount = cardWidth * index;
      this.carouselWrapper.nativeElement.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  getVisibleSlides(): NFT[] {
    return this.nfts;
  }

  getDotIndicators(): number[] {
    // Um dot para cada card
    return Array.from({ length: this.nfts.length }, (_, i) => i);
  }

  getCurrentDotIndex(): number {
    return this.currentIndex;
  }

  canGoNext(): boolean {
    return this.currentIndex < this.nfts.length - 1;
  }

  canGoPrev(): boolean {
    return this.currentIndex > 0;
  }
}

