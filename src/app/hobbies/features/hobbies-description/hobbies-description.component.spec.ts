import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesDescriptionComponent } from './hobbies-description.component';

describe('HobbiesDescriptionComponent', () => {
  let component: HobbiesDescriptionComponent;
  let fixture: ComponentFixture<HobbiesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HobbiesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HobbiesDescriptionComponent', () => {
    expect(component).toBeTruthy();
  });
});
