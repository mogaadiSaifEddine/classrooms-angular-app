import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAppareilComponent } from './one-appareil.component';

describe('OneAppareilComponent', () => {
  let component: OneAppareilComponent;
  let fixture: ComponentFixture<OneAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
