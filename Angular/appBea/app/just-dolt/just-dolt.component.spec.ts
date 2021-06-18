import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustDoltComponent } from './just-dolt.component';

describe('JustDoltComponent', () => {
  let component: JustDoltComponent;
  let fixture: ComponentFixture<JustDoltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustDoltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustDoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
