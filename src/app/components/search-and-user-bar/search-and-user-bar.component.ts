import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-and-user-bar',
  templateUrl: './search-and-user-bar.component.html',
  styleUrls: ['./search-and-user-bar.component.css']
})
export class SearchAndUserBarComponent implements OnInit {
  isAdmin = this.userService.isAdmin;
  toggleUser() {
    this.userService.toggleAdmin();
    this.isAdmin = this.userService.isAdmin;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
