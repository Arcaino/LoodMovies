/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RelogioComponent } from './relogio.component';

describe('RelogioComponent', () => {
  let component: RelogioComponent;
  let fixture: ComponentFixture<RelogioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelogioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
