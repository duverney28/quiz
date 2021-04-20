import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroclientesComponent } from './nuestroclientes.component';

describe('NuestroclientesComponent', () => {
  let component: NuestroclientesComponent;
  let fixture: ComponentFixture<NuestroclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
