import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneJoueurComponent } from './one-joueur.component';

describe('OneJoueurComponent', () => {
  let component: OneJoueurComponent;
  let fixture: ComponentFixture<OneJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
