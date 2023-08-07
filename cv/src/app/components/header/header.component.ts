import { Component } from '@angular/core';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCircleDown = faCircleDown;
  downloadCV() {
    const link = document.createElement('a');
    link.href = '../../../assets/CV-Y_Masliak-Web-Developer.pdf';
    link.download = 'CV-Masliak-Yulia.pdf';
    link.target = '_blank';
    link.click();
  }
}
