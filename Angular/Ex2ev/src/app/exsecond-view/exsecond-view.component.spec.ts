import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsecondViewComponent } from './exsecond-view.component';

describe('ExsecondViewComponent', () => {
  let component: ExsecondViewComponent;
  let fixture: ComponentFixture<ExsecondViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExsecondViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExsecondViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
