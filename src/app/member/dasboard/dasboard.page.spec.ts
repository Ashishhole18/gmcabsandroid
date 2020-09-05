import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DasboardPage } from './dasboard.page';

describe('DasboardPage', () => {
  let component: DasboardPage;
  let fixture: ComponentFixture<DasboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DasboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
