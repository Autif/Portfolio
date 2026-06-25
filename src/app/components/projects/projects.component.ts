import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      number: '01',
      title: 'Enterprise LMS & Online Examination System',
      category: 'EdTech Platform',
      description: 'A complete end-to-end educational assessment ecosystem built independently from scratch — SIS integration, adaptive exam engine, real-time proctoring, AI grading, and a dynamic multi-modal question bank.',
      highlights: [
        'Multi-campus sharded architecture serving 100K+ concurrent users',
        'AI-assisted grading pipeline: essay, speaking (Whisper), math, graph types',
        'LiveKit WebRTC proctoring with real-time audio/video feeds',
        'Redis pub/sub cache invalidation across all app servers',
        'Atomic PostgreSQL stored procedures with typed exception codes',
        'K6 load tested — zero connection pool exhaustion under peak load',
      ],
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'Redis', 'LiveKit', 'Dapper', 'Docker'],
      featured: true,
      color: '#00D4FF'
    },
    {
      number: '02',
      title: 'EdTech E-Commerce & Course Marketplace',
      category: 'E-Commerce',
      description: 'A student-facing course marketplace with secure checkout, digital payments, lesson access control, and progress tracking — built on a clean .NET Core + Angular + PostgreSQL stack.',
      highlights: [
        'Secure payment gateway integrations',
        'Progress tracking and interactive review modules',
        'Subscription and course access management',
        'Entity Framework Core with clean domain modeling',
      ],
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'EF Core', 'Tailwind CSS'],
      featured: false,
      color: '#0066FF'
    },
    {
      number: '03',
      title: 'Advanced Analytics & Data Visualization Dashboard',
      category: 'Data Dashboard',
      description: 'A real-time analytics dashboard mapping classroom and exam data into executive telemetry — live test sessions, class score histories, and year-over-year progress charts.',
      highlights: [
        'Interactive Chart.js / D3.js visualizations',
        'PostgreSQL cursor-based functions for large datasets',
        'Dynamic color palettes and responsive layout',
        'MySQL with Dapper for high-throughput queries',
      ],
      stack: ['.NET Core', 'Angular', 'MySQL', 'Dapper', 'D3.js', 'Chart.js', 'Bootstrap'],
      featured: false,
      color: '#00FF88'
    },
    {
      number: '04',
      title: 'Interactive OS & Office Simulation Engine',
      category: 'Desktop App',
      description: 'A WPF desktop sandboxed environment for hands-on practical software testing — launches native MS Office tools, captures programmatic events, silently scores responses, and syncs to a remote database.',
      highlights: [
        'MS Interop for native Word, Excel, PowerPoint automation',
        'Event capture and silent scoring on file completion',
        'Sandboxed exam environment with WPF/XAML UI',
        'Remote database sync on test completion',
      ],
      stack: ['C#', 'WPF', 'XAML', 'MS Interop', 'MySQL'],
      featured: false,
      color: '#FF6B6B'
    },
  ];
}
