import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesListComponent } from './gnomes-list.component';

describe('GnomesListComponent', () => {
  let component: GnomesListComponent;
  let fixture: ComponentFixture<GnomesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
