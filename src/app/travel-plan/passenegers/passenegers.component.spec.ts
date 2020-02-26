import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassenegersComponent } from './passenegers.component';

describe('PassenegersComponent', () => {
  let component: PassenegersComponent;
  let fixture: ComponentFixture<PassenegersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassenegersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassenegersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
