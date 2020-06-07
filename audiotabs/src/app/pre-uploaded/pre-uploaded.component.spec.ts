import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreUploadedComponent } from './pre-uploaded.component';

describe('PreUploadedComponent', () => {
  let component: PreUploadedComponent;
  let fixture: ComponentFixture<PreUploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreUploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
