import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalButtonComponent } from './dialog-modal-button.component';

describe('DialogModalButtonComponent', () => {
  let component: DialogModalButtonComponent;
  let fixture: ComponentFixture<DialogModalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
