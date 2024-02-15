import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhCarouselComponent } from './wh-carousel.component';

describe('WhCarouselComponent', () => {
  let component: WhCarouselComponent;
  let fixture: ComponentFixture<WhCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
