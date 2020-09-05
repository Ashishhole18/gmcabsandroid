import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RailwaystationPage } from './railwaystation.page';

describe('RailwaystationPage', () => {
  let component: RailwaystationPage;
  let fixture: ComponentFixture<RailwaystationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwaystationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RailwaystationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
