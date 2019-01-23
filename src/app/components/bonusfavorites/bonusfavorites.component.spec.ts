import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusfavoritesComponent } from './bonusfavorites.component';

describe('BonusfavoritesComponent', () => {
  let component: BonusfavoritesComponent;
  let fixture: ComponentFixture<BonusfavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusfavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
