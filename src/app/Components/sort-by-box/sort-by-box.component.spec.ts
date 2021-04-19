import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByBoxComponent } from './sort-by-box.component';

describe('SortByBoxComponent', () => {
  let component: SortByBoxComponent;
  let fixture: ComponentFixture<SortByBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
