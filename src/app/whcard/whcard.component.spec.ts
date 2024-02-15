import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhcardComponent } from './whcard.component';

describe('WhcardComponent', () => {
  let component: WhcardComponent;
  let fixture: ComponentFixture<WhcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
