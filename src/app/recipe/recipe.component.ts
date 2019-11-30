import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  title = 'Demo';
  public formGroup: FormGroup;
  ingredient: FormArray;
  req:any;
  isLoading:boolean = false;
  constructor(private _fb: FormBuilder,
    private http: HttpClient) { }
    ngOnInit() {
      this.formGroup = this._fb.group({
        recipeName: new FormControl('',[Validators.required]),
        recipeQty: new FormControl('',[Validators.required]),
        recipeUnit: new FormControl('',[Validators.required]),
        nutritionQty: new FormControl('',[Validators.required]),
        nutritionUnit: new FormControl('',[Validators.required]),
        protinNutration: new FormControl(''),
        protinMin: new FormControl(''),
        protinMax: new FormControl(''),
        lipidNutration: new FormControl(''),
        lipidMin: new FormControl(''),
        lipidMax: new FormControl(''),
        ashNutration: new FormControl(''),
        ashMin: new FormControl(''),
        ashMax: new FormControl(''),
        fiberNutration: new FormControl(''),
        fiberMin: new FormControl(''),
        fiberMax: new FormControl(''),
        sugarNutration: new FormControl(''),
        sugarMin: new FormControl(''),
        sugarMax: new FormControl(''),
        calciumNutration: new FormControl(''),
        calciumMin: new FormControl(''),
        calciumMax: new FormControl(''),
        ironNutration: new FormControl(''),
        ironMin: new FormControl(''),
        ironMax: new FormControl(''),
        potassiumNutration: new FormControl(''),
        potassiumMin: new FormControl(''),
        potassiumMax: new FormControl(''),
        sodiumNutration: new FormControl(''),
        sodiumMin: new FormControl(''),
        sodiumMax: new FormControl(''),
        fa_satNutration: new FormControl(''),
        fa_satMin: new FormControl(''),
        fa_satMax: new FormControl(''),
        ingredientUnit: new FormControl(''),
        ingredient: this._fb.array([ this.createItem() ])

      });
    }
    addandRemoveValidation(controlName,minControl,maxControl) {
      setTimeout(() => {
        if (this.formGroup.controls[controlName].value) {
           this.formGroup.get(minControl).setValidators(Validators.required);
          this.formGroup.get(maxControl).setValidators(Validators.required);
       } else {
          this.formGroup.get(minControl).clearValidators();
          this.formGroup.get(maxControl).clearValidators();

        }
        this.formGroup.get(minControl).updateValueAndValidity();
        this.formGroup.get(maxControl).updateValueAndValidity();
        }, 1000);
    }
  onSubmit(){
    if(this.formGroup.valid){
      this.req = this.setData();
      console.log(this.req);

 //       this.isLoading = true;
        // let url = '';
      // this.http.post(url,this.req).subscribe((res:any) => {
      //  this.isLoading = false;
      // });


    }

  }




  createItem(): FormGroup {
    return this._fb.group({
      Name: new FormControl(),
      Cost: new FormControl(),
      fixIngrident:new FormControl(),
      fixIngridentAmount:new FormControl(),
    });
  }

  addItem(): void {
    this.ingredient = this.formGroup.get('ingredient') as FormArray;
    this.ingredient.push(this.createItem());
  }

  setData(){
    let req:any = {
      receipe:this.formGroup.controls['recipeName'].value,
      quantity: this.formGroup.controls['recipeQty'].value,
      unit: this.formGroup.controls['recipeUnit'].value,
      nutritionFacts: {
        quantity:this.formGroup.controls['nutritionQty'].value,
        unit: this.formGroup.controls['nutritionUnit'].value,
        nutritions: []
      },
      ingredientDetails: {
      unit:  this.formGroup.controls['ingredientUnit'].value,
      ingredients: this.formGroup.controls['ingredient'].value
      }
    };
    if(this.formGroup.controls['protinNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'protein',
        min:this.formGroup.controls['protinMin'].value,
        max:this.formGroup.controls['protinMax'].value,

      });
    }


    if(this.formGroup.controls['lipidNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'lipid',
        min:this.formGroup.controls['lipidMin'].value,
        max:this.formGroup.controls['lipidMax'].value,

      });
    }


    if(this.formGroup.controls['ashNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'ash',
        min:this.formGroup.controls['ashMin'].value,
        max:this.formGroup.controls['ashMax'].value,

      });
    }



    if(this.formGroup.controls['fiberNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'fiber',
        min:this.formGroup.controls['fiberMin'].value,
        max:this.formGroup.controls['fiberMax'].value,

      });
    }





    if(this.formGroup.controls['sugarNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'sugar',
        min:this.formGroup.controls['sugarMin'].value,
        max:this.formGroup.controls['sugarMax'].value,

      });
    }





    if(this.formGroup.controls['calciumNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'calcium',
        min:this.formGroup.controls['calciumMin'].value,
        max:this.formGroup.controls['calciumMax'].value,

      });
    }





    if(this.formGroup.controls['ironNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'iron',
        min:this.formGroup.controls['ironMin'].value,
        max:this.formGroup.controls['ironMax'].value,

      });
    }



    if(this.formGroup.controls['potassiumNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'potassium',
        min:this.formGroup.controls['potassiumMin'].value,
        max:this.formGroup.controls['potassiumMax'].value,

      });
    }



    if(this.formGroup.controls['sodiumNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'sodium',
        min:this.formGroup.controls['sodiumMin'].value,
        max:this.formGroup.controls['sodiumMax'].value,

      });
    }




    if(this.formGroup.controls['fa_satNutration'].value){
      req.nutritionFacts.nutritions.push({
        name:'fa_sat',
        min:this.formGroup.controls['fa_satMin'].value,
        max:this.formGroup.controls['fa_satMax'].value,

      });
    }

    console.log(req);
    return req;

  }


}
