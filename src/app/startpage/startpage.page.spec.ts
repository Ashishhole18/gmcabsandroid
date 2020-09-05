import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartpagePage } from './startpage.page';

describe('StartpagePage', () => {
  let component: StartpagePage;
  let fixture: ComponentFixture<StartpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
