import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {
  title:string;
  columnDefs:any;
  rowData:any;
  defaultColDef:any;
  menu:boolean = false;
  constructor() { }

  ngOnInit() {

    this.title = 'app';

    this.columnDefs = [
        {headerName: 'Make', field: 'make',sortable: true, filter: true,width:500  },
        {headerName: 'Model', field: 'model' ,sortable: true, filter: true,width:500  },
        {headerName: 'Price', field: 'price' ,sortable: true, filter: true ,width:500 }
    ];

    this.defaultColDef = {
      sortable: true,
      filter: true,
      width:150
    };
    this.rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

  }

  menuToggle(){
    this.menu = this.menu ? false : true;

  }

}
