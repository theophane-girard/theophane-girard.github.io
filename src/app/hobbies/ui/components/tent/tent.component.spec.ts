import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentComponent } from './tent.component';

describe('TentComponent', () => {
  let component: TentComponent;
  let fixture: ComponentFixture<TentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
