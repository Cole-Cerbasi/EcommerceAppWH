import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhPromoBannerComponent } from './wh-promo-banner.component';

describe('WhPromoBannerComponent', () => {
  let component: WhPromoBannerComponent;
  let fixture: ComponentFixture<WhPromoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhPromoBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhPromoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
