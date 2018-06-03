import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  rForm: FormGroup;
  post: any;                    
  description: string = '';
  name: string = '';
  email: string='';

  constructor(private fb: FormBuilder) {   

  this.rForm = fb.group({
    'name': [null, Validators.required],
    'email': [null, Validators.required],
    'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])],
    });
  }
  addPost(post) {
    this.name = post.name;
    this.email = post.email
    this.description = post.description;
  } 
}
