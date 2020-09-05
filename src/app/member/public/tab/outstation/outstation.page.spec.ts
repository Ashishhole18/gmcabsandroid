import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutstationPage } from './outstation.page';

describe('OutstationPage', () => {
  let component: OutstationPage;
  let fixture: ComponentFixture<OutstationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutstationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
