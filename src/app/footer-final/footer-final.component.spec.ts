import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFinalComponent } from './footer-final.component';

describe('FooterFinalComponent', () => {
  let component: FooterFinalComponent;
  let fixture: ComponentFixture<FooterFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
