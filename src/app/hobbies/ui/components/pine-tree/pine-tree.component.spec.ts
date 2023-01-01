import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineTreeComponent } from './pine-tree.component';

describe('PineTreeComponent', () => {
  let component: PineTreeComponent;
  let fixture: ComponentFixture<PineTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PineTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PineTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
