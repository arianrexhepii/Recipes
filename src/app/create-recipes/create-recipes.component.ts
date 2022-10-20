import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from '../services/alert-message.service';
import { StrapiService } from '../services/strapi.service';
import IngredientsData from './jsonFile/ingredientsData.json'
@Component({
  selector: 'app-create-recipes',
  templateUrl: './create-recipes.component.html',
  styleUrls: ['./create-recipes.component.scss']
})
export class CreateRecipesComponent implements OnInit {

  ingredients: Ingredients[] = IngredientsData;
  bC = new BroadcastChannel('pos_channel');
  showActionCard: boolean = false;
  addMode: boolean = false;
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private strapiServices: StrapiService,
    private alertService: AlertMessageService,
  ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      recipesName: new FormControl('', Validators.required),
      recipesSource: new FormControl('',),
      recipesHours: new FormControl('', Validators.required),
      recipesMinutes: new FormControl('', Validators.required),
      recipes: this.fb.array([
        this.initRecipes()
      ]),
      recipesInstructions: new FormControl('', Validators.required),
      otherIngredient: this.fb.control(''),
      otherQuantity: this.fb.control('')
    });
  }

  get form() { return this.myForm.get('recipes') as FormArray; }

  toggleAddMode(): void {
    this.addMode = !this.addMode;
    this.showActionCard = !this.showActionCard;
    this.myForm.reset();
    this.form.removeAt(this.form.length);

  }

  initRecipes() {
    return this.fb.group({
      product: this.fb.control('', Validators.required),
      quantity: this.fb.control('', Validators.required),

    });
  }
  //button for adding ingredients input group
  addGroup() {
    this.form.push(this.initRecipes());
  }
  // function to tracks changes by the return value of the function
  trackByFn(item: any) {
    return item.trackingId;
  }
  // remove ingredients input group
  removeGroup(i: number) {
    this.form.removeAt(i);
  }

  createNewRecipes() {
    let formRecipes = {
      data: {
        recipesName: this.myForm.value.recipesName,
        recipesSource: this.myForm.value.recipesSource,
        recipesHours: this.myForm.value.recipesHours,
        recipesMinutes: this.myForm.value.recipesMinutes,
        recipes: this.myForm.value.recipes,
        recipesInstructions: this.myForm.value.recipesInstructions,
        otherIngredient: this.myForm.value.otherIngredient,
        otherQuantity: this.myForm.value.otherQuantity,
      }
    }
    //let createdNewRecipe = JSON.stringify(this.myForm.value)
    //localStorage.setItem('newRecipes', createdNewRecipe)

    this.strapiServices.createRecipes(formRecipes).subscribe(createdNewRecipe => {
      this.bC.postMessage({ status: 'new', recipes: createdNewRecipe });
      this.toggleAddMode();

      this.alertService.alert('success', 'Your recipes created successfully!')

    },
      (err: ErrorEvent) => {
        this.toggleAddMode();
        this.alertService.alert('error', 'Something went wrong. Please try again!')
      })
  }
}
interface Ingredients {
  product: String;
}  