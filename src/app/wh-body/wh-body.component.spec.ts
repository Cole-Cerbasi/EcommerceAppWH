import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhBodyComponent } from './wh-body.component';

describe('WhBodyComponent', () => {
  let component: WhBodyComponent;
  let fixture: ComponentFixture<WhBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
