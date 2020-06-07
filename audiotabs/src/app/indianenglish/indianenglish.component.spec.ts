import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianenglishComponent } from './indianenglish.component';

describe('IndianenglishComponent', () => {
  let component: IndianenglishComponent;
  let fixture: ComponentFixture<IndianenglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianenglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
