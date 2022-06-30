import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StikerSeccionComponent } from './stiker-seccion.component';

describe('StikerSeccionComponent', () => {
  let component: StikerSeccionComponent;
  let fixture: ComponentFixture<StikerSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StikerSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StikerSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
