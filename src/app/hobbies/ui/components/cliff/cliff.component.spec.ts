import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliffComponent } from './cliff.component';

describe('CliffComponent', () => {
  let component: CliffComponent;
  let fixture: ComponentFixture<CliffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CliffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
