import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanaceSidebarComponent } from './maintanace-sidebar.component';

describe('MaintanaceSidebarComponent', () => {
  let component: MaintanaceSidebarComponent;
  let fixture: ComponentFixture<MaintanaceSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintanaceSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintanaceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
