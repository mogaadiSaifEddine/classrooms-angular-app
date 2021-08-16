import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtzeroqtComponent } from './qtzeroqt.component';

describe('QtzeroqtComponent', () => {
  let component: QtzeroqtComponent;
  let fixture: ComponentFixture<QtzeroqtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtzeroqtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtzeroqtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
