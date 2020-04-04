import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConocimientoPage } from './conocimiento.page';

describe('ConocimientoPage', () => {
  let component: ConocimientoPage;
  let fixture: ComponentFixture<ConocimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConocimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
