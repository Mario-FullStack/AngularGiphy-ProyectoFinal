import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSeccionComponent } from './gifs-seccion.component';

describe('GifsSeccionComponent', () => {
  let component: GifsSeccionComponent;
  let fixture: ComponentFixture<GifsSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
