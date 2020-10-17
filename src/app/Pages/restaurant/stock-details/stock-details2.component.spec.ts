import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetails2Component } from './stock-details2.component';

describe('StockDetailsComponent', () => {
  let component: StockDetails2Component;
  let fixture: ComponentFixture<StockDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
