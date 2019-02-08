import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesFormComponent } from './gnomes-form.component';

describe('GnomesFormComponent', () => {
  let component: GnomesFormComponent;
  let fixture: ComponentFixture<GnomesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
