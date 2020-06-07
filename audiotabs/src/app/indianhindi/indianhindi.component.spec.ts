import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianhindiComponent } from './indianhindi.component';

describe('IndianhindiComponent', () => {
  let component: IndianhindiComponent;
  let fixture: ComponentFixture<IndianhindiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianhindiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianhindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
