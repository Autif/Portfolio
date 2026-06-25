import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedTitle = '';
  cursorVisible = true;
  private titles = [
    'Senior Full-Stack Engineer',
    '.NET & Angular Specialist',
    'Enterprise EdTech Architect',
    'AI Integration Engineer'
  ];
  private titleIndex = 0;
  private charIndex = 0;
  private typing = true;
  private timer: any;
  private cursorTimer: any;

  terminalLines = [
    { prefix: '❯', text: 'experience', value: '6+ years' },
    { prefix: '❯', text: 'stack',      value: '.NET · Angular · PostgreSQL · Redis' },
    { prefix: '❯', text: 'domain',     value: 'EdTech · LMS · Enterprise Platforms' },
    { prefix: '❯', text: 'location',   value: 'Remote (Riyadh, Saudi Arabia)' },
    { prefix: '❯', text: 'status',     value: '🟢 Open to opportunities' },
  ];

  stats = [
    { value: '6+',   label: 'Years Experience' },
    { value: '4',    label: 'Major Platforms Built' },
    { value: '100K+',label: 'Concurrent Users Served' },
    { value: '∞',    label: 'Coffees Consumed' },
  ];

  ngOnInit() {
    this.typeLoop();
    this.cursorTimer = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 530);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
    clearInterval(this.cursorTimer);
  }

  typeLoop() {
    const current = this.titles[this.titleIndex];
    if (this.typing) {
      if (this.charIndex < current.length) {
        this.displayedTitle = current.slice(0, ++this.charIndex);
        this.timer = setTimeout(() => this.typeLoop(), 65);
      } else {
        this.timer = setTimeout(() => { this.typing = false; this.typeLoop(); }, 2200);
      }
    } else {
      if (this.charIndex > 0) {
        this.displayedTitle = current.slice(0, --this.charIndex);
        this.timer = setTimeout(() => this.typeLoop(), 35);
      } else {
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.typing = true;
        this.timer = setTimeout(() => this.typeLoop(), 300);
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
