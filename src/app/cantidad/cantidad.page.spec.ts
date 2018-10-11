import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadPage } from './cantidad.page';

describe('CantidadPage', () => {
  let component: CantidadPage;
  let fixture: ComponentFixture<CantidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
