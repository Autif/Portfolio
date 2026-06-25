import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'autifshafi92@gmail.com',
      href: 'mailto:autifshafi92@gmail.com',
      desc: 'Best way to reach me'
    },
    {
      icon: '📱',
      label: 'Phone / WhatsApp',
      value: '+91 6005359099',
      href: 'tel:+916005359099',
      desc: 'Available during business hours (IST)'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/autif-shafi-a7b621142',
      href: 'https://linkedin.com/in/autif-shafi-a7b621142',
      desc: 'Professional profile & recommendations'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/autif',
      href: 'https://github.com/autif',
      desc: 'Code & open source contributions'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Jammu & Kashmir, India',
      href: null,
      desc: 'Remote available worldwide'
    },
  ];
}
