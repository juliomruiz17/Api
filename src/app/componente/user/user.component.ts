import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   constructor( private UsersService: UsersService) { }
   
   User$: any = []
   ngOnInit()  {
    return this.UsersService.getUsers()
    .subscribe(data => this.User$ = data)
  }


}
