import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.router.navigate(['user-component'], { relativeTo: this.route });
  }
  users() {
    this.router.navigate(['user-component'], { relativeTo: this.route });
  }
  products() {
    this.router.navigate(['product-component'], { relativeTo: this.route });
  }
  carts() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }
}

