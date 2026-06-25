import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '🏗️',
      title: 'Full-Stack Platform Development',
      desc: 'End-to-end delivery of enterprise web platforms: database design, .NET Core APIs, and Angular SPAs. From requirements to deployed system.',
      bullets: ['Multi-tenant & sharded architectures', 'RESTful API design & documentation', 'Scalable database schema design'],
      accent: '#00D4FF'
    },
    {
      icon: '🤖',
      title: 'AI & Automation Integration',
      desc: 'Plug AI grading, OCR pipelines, speech-to-text, and RAG workflows into your existing platform or build them from scratch.',
      bullets: ['AI evaluation API integration', 'Whisper speech-to-text pipelines', 'OCR for handwritten document digitization'],
      accent: '#00FF88'
    },
    {
      icon: '⚡',
      title: 'Performance Engineering & Load Testing',
      desc: 'Diagnose and fix bottlenecks under high concurrency: Redis caching, PostgreSQL query optimization, and K6 load testing.',
      bullets: ['Redis caching & pub/sub invalidation', 'PostgreSQL stored procedure optimization', 'K6 load testing & bottleneck analysis'],
      accent: '#0066FF'
    },
    {
      icon: '📡',
      title: 'Real-Time Systems',
      desc: 'Build live proctoring, chat, and event-driven pipelines using LiveKit WebRTC, SignalR, and Redis pub/sub.',
      bullets: ['LiveKit WebRTC audio/video feeds', 'Redis pub/sub messaging', 'Background worker queue architecture'],
      accent: '#FF6B6B'
    },
    {
      icon: '📊',
      title: 'LMS / EdTech Architecture',
      desc: 'Design and build Learning Management Systems and Student Information Systems that handle complex enrollment, assessment, and reporting workflows.',
      bullets: ['Question bank & exam engine design', 'Adaptive assessment pathways', 'Analytics dashboards with Chart.js / D3'],
      accent: '#FFB347'
    },
    {
      icon: '🛠️',
      title: 'Code Review & Technical Consultation',
      desc: 'Review your existing codebase, identify concurrency issues, cache design flaws, and architectural debt — with actionable fixes.',
      bullets: ['Concurrency & race condition audits', 'Database round-trip reduction', 'Cache design & invalidation strategy'],
      accent: '#B47AEA'
    },
  ];
}
