import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBreadcrumbsComponent } from './nav-breadcrumbs.component';

describe('NavBreadcrumbsComponent', () => {
  let component: NavBreadcrumbsComponent;
  let fixture: ComponentFixture<NavBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
