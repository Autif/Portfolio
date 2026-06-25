import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  highlights = [
    { icon: '🏗️', title: 'Systems Architect', desc: 'Designed end-to-end LMS/SIS ecosystems from zero — database schema through deployed Angular SPA.' },
    { icon: '⚡', title: 'Performance First', desc: 'K6 load tested, Redis-cached, and Dapper-optimized for high-concurrency, minimal round-trip backends.' },
    { icon: '🤖', title: 'AI Integration', desc: 'Plugged AI grading APIs, OCR pipelines, and RAG workflows directly into exam evaluation flows.' },
    { icon: '📡', title: 'Real-Time Systems', desc: 'LiveKit WebRTC proctoring, Redis pub/sub cache invalidation, and SignalR event-driven pipelines.' },
  ];

  ngOnInit() {
    setTimeout(() => this.initObserver(), 100);
  }

  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.15 });
    this.revealEls.forEach(el => observer.observe(el.nativeElement));
  }
}
