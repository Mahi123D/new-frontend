import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

  id: any;
  profile: any;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
        this.id = params['id'];
        console.log(this.id);
      }
    );
    this.getProfile()
  }


  getProfile(){
    this.profileService.getProfile(this.id).subscribe((res: any) => {
console.log("res",res);
      if(res){
      this.profile = res[0];
      }
    })
  }
}
