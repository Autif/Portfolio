import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="brand-bracket">&lt;</span>
          <span class="brand-name">Autif Shafi</span>
          <span class="brand-bracket">/&gt;</span>
        </div>
        <div class="footer-links">
          <a href="mailto:autifshafi92@gmail.com">Email</a>
          <a href="https://linkedin.com/in/autif-shafi-a7b621142" target="_blank">LinkedIn</a>
          <a href="https://github.com/autif" target="_blank">GitHub</a>
        </div>
        <div class="footer-copy">
          © {{ year }} Autif Shafi · Senior Full-Stack Engineer
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #060b14;
      border-top: 1px solid rgba(0, 212, 255, 0.08);
      padding: 32px 0;
    }
    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }
    .footer-brand {
      font-family: var(--font-mono);
      font-size: 1.05rem;
      font-weight: 500;
    }
    .brand-bracket { color: var(--cyan); }
    .brand-name { color: var(--white); margin: 0 3px; }
    .footer-links {
      display: flex;
      gap: 24px;
    }
    .footer-links a {
      font-size: 0.88rem;
      color: var(--silver);
      transition: color var(--transition);
    }
    .footer-links a:hover { color: var(--cyan); }
    .footer-copy {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--silver-dim);
    }
    @media (max-width: 600px) {
      .footer-inner { flex-direction: column; text-align: center; }
      .footer-links { justify-content: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
