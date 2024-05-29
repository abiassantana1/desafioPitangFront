import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarroComponent } from './listar-carro.component';

describe('ListarCarroComponent', () => {
  let component: ListarCarroComponent;
  let fixture: ComponentFixture<ListarCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCarroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
