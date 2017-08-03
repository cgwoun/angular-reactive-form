import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-picnic-form',
  templateUrl: './picnic-form.component.html',
  styleUrls: ['./picnic-form.component.css']
})
export class PicnicFormComponent implements OnInit {
  picnicForm: FormGroup;

  //Different Picnic Categories
  categories = ['Dessert','Games','Drinks','Side'];

  item = {
    'Dessert':[],
    'Games':[],
    'Drinks':[],
    'Side':[],
    'CompanyProvided':[]
  };

  constructor() { }

  ngOnInit() {
    this.picnicForm = new FormGroup({
      category: new FormControl('',Validators.required),
      item: new FormControl('',[Validators.required,Validators.minLength(2)]),
      name: new FormControl('',[Validators.required,Validators.minLength(2)])
    });

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

  onSubmit({value,valid}:{value:FormGroup,valid:boolean}){
    this.item[value['category']].push(
      {'item':value['item'],'name':value['name']}
    );
    this.picnicForm.reset();
  }

}
