import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndUserBarComponent } from './search-and-user-bar.component';

describe('SearchAndUserBarComponent', () => {
  let component: SearchAndUserBarComponent;
  let fixture: ComponentFixture<SearchAndUserBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndUserBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndUserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
