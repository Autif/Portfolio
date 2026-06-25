import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories = [
    {
      label: 'Backend',
      icon: '⚙️',
      skills: ['C# / .NET Core', 'ASP.NET Web APIs', 'RESTful APIs', 'JWT Auth', 'Dapper ORM', 'Entity Framework Core', 'SignalR']
    },
    {
      label: 'Frontend',
      icon: '🖥️',
      skills: ['Angular (v15–17)', 'TypeScript', 'JavaScript ES2022', 'HTML5 / CSS3', 'Tailwind CSS', 'Bootstrap', 'Chart.js / D3.js']
    },
    {
      label: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'Redis (Cache / Pub-Sub)', 'Stored Procedures', 'Query Optimization']
    },
    {
      label: 'DevOps & Infra',
      icon: '🚀',
      skills: ['Docker', 'Git / GitHub', 'Netlify', 'Postman / Swagger', 'K6 Load Testing', 'NFS Storage', 'Linux / Ubuntu']
    },
    {
      label: 'AI & Integrations',
      icon: '🤖',
      skills: ['AI Grading APIs', 'OCR Pipelines', 'RAG Architecture', 'Whisper (Speech-to-Text)', 'OpenAI / DigitalOcean AI', 'LiveKit WebRTC']
    },
    {
      label: 'Desktop & Other',
      icon: '🖱️',
      skills: ['WPF / XAML', 'MS Interop (Office)', 'C / C++', 'Python (scripting)', 'Jobe (Code Execution)', 'Scriban Templates']
    },
  ];
}
