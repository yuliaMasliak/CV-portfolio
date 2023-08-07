import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  faCircleDown = faCircleDown;
  isModal = false;
  downloadCV() {
    const link = document.createElement('a');
    link.href = '../../../assets/CV-Y_Masliak-Web-Developer.pdf';
    link.download = 'CV-Masliak-Yulia.pdf';
    link.target = '_blank';
    link.click();
  }
  toProjects() {
    this.router.navigate(['/main/projects']);
  }
  toHome() {
    this.router.navigate(['/main/about']);
  }
  toggleContactForm() {
    this.isModal = !this.isModal;
  }
}
