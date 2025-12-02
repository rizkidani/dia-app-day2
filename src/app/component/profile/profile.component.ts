import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router) { }
  names: any[] = [
    {
      id: 1,
      name: 'Alice'
    },
    {
      id: 2,
      name: 'Bob',
    }
  ];

  id: number = 1;
  goToProfileDetail(id: number) {
    this.router.navigate(['/profile', id]);
  }
}
