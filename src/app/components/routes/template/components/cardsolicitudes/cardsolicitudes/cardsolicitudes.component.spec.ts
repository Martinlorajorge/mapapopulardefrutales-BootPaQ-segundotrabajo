import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsolicitudesComponent } from './cardsolicitudes.component';

describe('CardsolicitudesComponent', () => {
  let component: CardsolicitudesComponent;
  let fixture: ComponentFixture<CardsolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
