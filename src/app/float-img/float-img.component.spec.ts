/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FloatImgComponent } from './float-img.component';

describe('FloatImgComponent', () => {
  let component: FloatImgComponent;
  let fixture: ComponentFixture<FloatImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
