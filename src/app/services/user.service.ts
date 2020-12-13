import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAdmin = false;
  @Output() loginUpdate = new EventEmitter<Event>();

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
    this.loginUpdate.emit();
  }
  getAdmin() {
    return this.isAdmin;
  }



  constructor() { }
}
