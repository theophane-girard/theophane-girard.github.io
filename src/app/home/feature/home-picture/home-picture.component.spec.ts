import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePictureComponent } from './home-picture.component';

describe('HomePictureComponent', () => {
  let component: HomePictureComponent;
  let fixture: ComponentFixture<HomePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
