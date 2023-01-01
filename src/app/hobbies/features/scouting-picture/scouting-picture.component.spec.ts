import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutingPictureComponent } from './scouting-picture.component';

describe('IllustrationComponent', () => {
  let component: ScoutingPictureComponent;
  let fixture: ComponentFixture<ScoutingPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoutingPictureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoutingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
