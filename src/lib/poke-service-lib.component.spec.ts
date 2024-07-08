import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeServiceLibComponent } from './poke-service-lib.component';

describe('PokeServiceLibComponent', () => {
  let component: PokeServiceLibComponent;
  let fixture: ComponentFixture<PokeServiceLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeServiceLibComponent]
    });
    fixture = TestBed.createComponent(PokeServiceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
