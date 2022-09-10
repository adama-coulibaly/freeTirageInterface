import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantComponent } from './postulant.component';

describe('TirageComponent', () => {
  let component: PostulantComponent;
  let fixture: ComponentFixture<PostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
