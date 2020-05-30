import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductionSlidesPage } from './introduction-slides.page';

describe('IntroductionSlidesPage', () => {
  let component: IntroductionSlidesPage;
  let fixture: ComponentFixture<IntroductionSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionSlidesPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
