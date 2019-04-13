import { BusinessService } from './../business.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['',Validators.required],
      business_name: ['',Validators.required],
      business_gst_number: ['',Validators.required]
    })
  }

  addBusiness(person_name,business_name,business_gst_number){
    //alert('hello');
    this.bs.addBusiness(person_name,business_name,business_gst_number);
    this.router.navigate(['business']);
  } 

  ngOnInit() {
  }

}
