import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollpsibleSectionComponent } from './collpsible-section.component';

describe('CollpsibleSectionComponent', () => {
  let component: CollpsibleSectionComponent;
  let fixture: ComponentFixture<CollpsibleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollpsibleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollpsibleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
