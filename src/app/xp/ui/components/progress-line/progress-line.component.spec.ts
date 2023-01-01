import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLineComponent } from './progress-line.component';

describe('ProgressLineComponent', () => {
  let component: ProgressLineComponent;
  let fixture: ComponentFixture<ProgressLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProgressLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
