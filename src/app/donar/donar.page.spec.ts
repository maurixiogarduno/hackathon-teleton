import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarPage } from './donar.page';

describe('DonarPage', () => {
  let component: DonarPage;
  let fixture: ComponentFixture<DonarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
