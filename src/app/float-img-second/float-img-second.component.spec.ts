/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FloatImgSecondComponent } from './float-img-second.component';

describe('FloatImgSecondComponent', () => {
  let component: FloatImgSecondComponent;
  let fixture: ComponentFixture<FloatImgSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatImgSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatImgSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
