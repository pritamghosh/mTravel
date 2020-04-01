import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagHistoryComponent } from './bag-history.component';

describe('BagHistoryComponent', () => {
  let component: BagHistoryComponent;
  let fixture: ComponentFixture<BagHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
