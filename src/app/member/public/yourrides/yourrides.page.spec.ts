import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourridesPage } from './yourrides.page';

describe('YourridesPage', () => {
  let component: YourridesPage;
  let fixture: ComponentFixture<YourridesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourridesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourridesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
