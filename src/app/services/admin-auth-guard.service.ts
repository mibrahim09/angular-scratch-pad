import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    // if (user.IsAdmin) return true;
    this.router.navigate(['/not-authorized']);
    return false;
  }
}
