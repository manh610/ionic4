import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResignterPage } from './resignter.page';

describe('ResignterPage', () => {
  let component: ResignterPage;
  let fixture: ComponentFixture<ResignterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResignterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
