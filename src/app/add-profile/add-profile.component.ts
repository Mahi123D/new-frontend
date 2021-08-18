import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  profile: any = {
    firstname: '',
    email: '',
    phone: ''
  }

  error: any;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    if (!this.profile.firstname) {
      this.error = "first name is required";
      return "";
    }
    if (!this.profile.email) {
      this.error = "email is required";
      return;
    }
     if (!this.profile.phone) {
      this.error = "phone is required and it's length should be 10";
      return;
    }

    var a = this.validateEmail(this.profile.email);
    if(a == false){
      this.error = "please add validate email id";
      return
    }
console.log("aaaa",a);
    this.profileService.saveProfile(this.profile).subscribe((res: any) => {
      console.log("res", res._id);
      this.router.navigate(['/get/' + res._id])
    })
  }

  validateEmail(email) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }

  omit_special_char(event) {
    var k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
