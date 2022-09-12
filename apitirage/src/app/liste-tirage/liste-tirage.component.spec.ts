import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTirageComponent } from './liste-tirage.component';

describe('ListeTirageComponent', () => {
  let component: ListeTirageComponent;
  let fixture: ComponentFixture<ListeTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
