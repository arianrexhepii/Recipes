import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRecipesComponent } from './preview-recipes.component';

describe('PreviewRecipesComponent', () => {
  let component: PreviewRecipesComponent;
  let fixture: ComponentFixture<PreviewRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
