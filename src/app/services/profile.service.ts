import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private backendService: BackendService) { }

  saveProfile(details){
    console.log("details",details);
    return this.backendService.post('profile' + '/saveProfile', details)
  }

  getProfile(id){
    return this.backendService.get('profile' + '/get/' + id)
  }

}
