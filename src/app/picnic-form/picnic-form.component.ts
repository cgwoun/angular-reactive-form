import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-picnic-form',
  templateUrl: './picnic-form.component.html',
  styleUrls: ['./picnic-form.component.css']
})
export class PicnicFormComponent implements OnInit {

  //Different Picnic Categories
  categories = ['Dessert','Games','Drinks','Side'];

  item = {
    'Dessert':[],
    'Games':[],
    'Drinks':[],
    'Side':[],
    'CompanyProvided':[]
  };

  picnicForm = new FormGroup({
    item: new FormControl(),
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.item['Games'] = [{'item':'Bean Bag Toss','name':'Jeff C.'},{'item':'Piñata ;)','name':'Chang G.'}];
    this.item['Drinks'] = [];
    this.item['Dessert'] = [{'item':'Hot Fudge Sundaes with Sprinkles 0_o','name':'Oscar K.'}];
    this.item['Side'] = [];
    this.item['CompanyProvided'] = [
        {'item':'Tri-tip, Chicken & Vegetarian Entree','name':'Boeing'},
        {'item':'Plates, napkins, utensils','name':'Boeing'},
        {'item':'Water','name':'Boeing'}
    ];
  }

  onSubmit(){
    console.log("Inside submit");
  }

}
