import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrodutionSlidesPage } from './introdution-slides.page';

describe('IntrodutionSlidesPage', () => {
  let component: IntrodutionSlidesPage;
  let fixture: ComponentFixture<IntrodutionSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrodutionSlidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrodutionSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
