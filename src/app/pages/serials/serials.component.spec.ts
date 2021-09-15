/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerialsComponent } from './serials.component';

describe('SerialsComponent', () => {
  let component: SerialsComponent;
  let fixture: ComponentFixture<SerialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
