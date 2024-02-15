import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhFooterComponent } from './wh-footer.component';

describe('WhFooterComponent', () => {
  let component: WhFooterComponent;
  let fixture: ComponentFixture<WhFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
