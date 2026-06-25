import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Senior Developer',
      company: 'Assrooh Athakiyah',
      location: 'Riyadh, Saudi Arabia',
      period: 'June 2021 – Present',
      mode: 'On-Site → Fully Remote',
      current: true,
      bullets: [
        'Independently architected and delivered an enterprise-grade LMS/SIS ecosystem from the ground up — serving a multi-campus sharded environment with 100K+ concurrent users.',
        'Engineered complex AI-assisted grading pipelines supporting essay, speaking (Whisper), math, and graph question types via DigitalOcean AI inference endpoints.',
        'Integrated LiveKit WebRTC for real-time audio/video proctoring; built Redis pub/sub invalidation layer propagating cache changes across all app servers.',
        'Designed speaking audio upload architecture: HMAC-signed tokens, bounded Channel queues, BackgroundService workers with exponential backoff and NFS move logic.',
        'Optimized all critical paths for minimal DB round-trips: Dapper positional queries, stored procedures with typed exception codes (P0001–P0004), and in-memory caching for hot settings.',
        'K6 load tested under high concurrency — diagnosed and fixed PostgreSQL connection pool exhaustion and Redis saturation.',
      ],
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'Redis', 'LiveKit', 'Dapper', 'Docker', 'K6']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Elance Technologies Pvt. Ltd',
      location: 'Jammu & Kashmir, India',
      period: 'October 2016 – November 2018',
      mode: 'On-Site',
      current: false,
      bullets: [
        'Conducted full lifecycle development including design, testing, requirement breakdowns, and database optimization for corporate clients.',
        'Built and maintained full-stack web applications using .NET, SQL Server, and JavaScript.',
      ],
      stack: ['.NET', 'MS SQL Server', 'JavaScript', 'HTML/CSS']
    },
  ];
}
