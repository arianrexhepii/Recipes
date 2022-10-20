import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecipesComponent } from './table-recipes.component';

describe('TableRecipesComponent', () => {
  let component: TableRecipesComponent;
  let fixture: ComponentFixture<TableRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
