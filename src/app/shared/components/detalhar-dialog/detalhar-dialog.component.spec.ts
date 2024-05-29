import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharDialogComponent } from './detalhar-dialog.component';

describe('DetalharDialogComponent', () => {
  let component: DetalharDialogComponent;
  let fixture: ComponentFixture<DetalharDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
