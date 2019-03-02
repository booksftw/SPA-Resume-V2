import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzprofileComponent } from './nzprofile.component';

describe('NzprofileComponent', () => {
  let component: NzprofileComponent;
  let fixture: ComponentFixture<NzprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
