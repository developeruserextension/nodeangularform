import { BusinessService } from '../business.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Business from '../Business';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService, private router: Router) { }

  deleteBusiness(id){
    this.bs.deleteBusiness(id).subscribe(res => {
      //console.log('deleted');
      this.router.navigate(['business']);
    })
  }

  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    })
  }

}
