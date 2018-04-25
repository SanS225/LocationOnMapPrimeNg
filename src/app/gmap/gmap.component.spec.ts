import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMapComponent } from './gmap.component';

describe('GmapComponent', () => {
  let component: GMapComponent;
  let fixture: ComponentFixture<GMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
