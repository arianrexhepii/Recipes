import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from '../dialog/confirm-alert/confirm-alert.component';
import { PreviewRecipesComponent } from '../dialog/preview-recipes/preview-recipes.component';
import { StrapiService } from 'src/app/services/strapi.service';


@Component({
  selector: 'app-table-recipes',
  templateUrl: './table-recipes.component.html',
  styleUrls: ['./table-recipes.component.scss']
})
export class TableRecipesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Recipe Name', 'Recipe Source', 'Number of ingredients', 'Ingredients', 'Preparation Instructions', 'Preparation time', 'Action'];
  bC = new BroadcastChannel('pos_channel');
  listAll: any = [];
  newList: [] = [];
  findRecipesById: any;
  dataSource = new MatTableDataSource<any>();

  constructor(
    private strapiServices: StrapiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    //send Data between Two Browser Tabs
    this.bC.onmessage = (msg: any) => {
      if (msg.data.status === 'new') {
        this.newList = msg.data.recipes.data;
        this.listAll.push(this.newList)
        this.dataSource = new MatTableDataSource(this.listAll);
      }
    }
    this.getAllRecipesList()
  }

  getAllRecipesList() {
    localStorage.getItem('newRecipes')
    //all recipes
    this.strapiServices.getAllRecipesList().subscribe(x => {
      this.listAll = x.data;
      this.dataSource = new MatTableDataSource(this.listAll);

    })
  }
  //open dialog for delete recipe and sending id for which we want to delete
  openDialogConfirm(event: number): void {

    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '360px',
      height: '250px',
      data: { id: event },
      backdropClass: 'backdropBackground'
    });
    //if delete recipe successfull splice from table
    dialogRef.componentInstance.deleteSuccess.subscribe((data) => {
      if (data === true) {
        this.ngOnInit()
      }
    });
  }

  openDialogPreview(event: number) {
    // find recipes by id
    this.findRecipesById = this.listAll.find(x => x.id == event);
    //open dialog for preview and sending data for recipie what we select for seeing details
    const dialogRef = this.dialog.open(PreviewRecipesComponent, {
      data: { recipeDetail: this.findRecipesById },
      backdropClass: 'backdropBackground'
    });
    dialogRef.componentInstance.deleteSuccess.subscribe((data) => {
      if (data === true) {
        this.ngOnInit()
      }
    });
  }

}
