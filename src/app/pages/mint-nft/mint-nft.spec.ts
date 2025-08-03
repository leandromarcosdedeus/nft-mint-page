import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintNft } from './mint-nft';

describe('MintNft', () => {
  let component: MintNft;
  let fixture: ComponentFixture<MintNft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MintNft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MintNft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
