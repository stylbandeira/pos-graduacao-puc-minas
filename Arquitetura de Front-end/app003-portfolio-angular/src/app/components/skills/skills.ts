import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  showAll = false;

  skills = [
    { name: 'PHP', level: 5 },
    { name: 'Laravel', level: 5 },
    { name: 'REST APIs', level: 5 },
    { name: 'MySQL', level: 5 },
    { name: 'Docker', level: 4 },
    { name: 'Git', level: 4 },
    { name: 'GitHub', level: 4 },

    { name: 'React', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'HTML5', level: 4 },
    { name: 'CSS3', level: 4 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Bootstrap', level: 4 },
    { name: 'Vite', level: 4 },

    { name: 'Angular', level: 3 },
    { name: 'Vue.js', level: 3 },
    { name: 'Node.js', level: 3 },

    { name: 'Python', level: 3 },
    { name: 'FastAPI', level: 3 },
    { name: 'Playwright', level: 3 },

    { name: 'Redis', level: 3 },
    { name: 'MongoDB', level: 3 },
    { name: 'SQLite', level: 3 },
    { name: 'Meilisearch', level: 3 },

    { name: 'PHPUnit', level: 4 },
    { name: 'TDD', level: 4 },
    { name: 'SOLID', level: 4 },
    { name: 'Clean Architecture', level: 4 },
    { name: 'DDD', level: 3 },
    { name: 'Design Patterns', level: 3 },

    { name: 'Eloquent ORM', level: 5 },
    { name: 'Laravel Sanctum', level: 4 },
    { name: 'Laravel Queues', level: 4 },
    { name: 'Laravel Jobs', level: 4 },
    { name: 'Laravel Events', level: 4 },
    { name: 'Laravel Scheduler', level: 4 },
    { name: 'Laravel Reverb', level: 3 },
    { name: 'WebSockets', level: 3 },

    { name: 'Docker Compose', level: 4 },
    { name: 'Linux', level: 4 },
    { name: 'Ubuntu', level: 4 },
    { name: 'Apache', level: 4 },
    { name: 'Nginx', level: 3 },
    { name: 'CI/CD', level: 3 },

    { name: 'GitHub Actions', level: 3 },
    { name: 'DevOps', level: 3 },
    { name: 'DevSecOps', level: 3 },
    { name: 'Cloud Computing', level: 3 },

    { name: 'Micro Frontends', level: 3 },
    { name: 'Monorepos', level: 3 },
    { name: 'SSR', level: 3 },
    { name: 'CSR', level: 4 },
    { name: 'SSG', level: 3 },

    { name: 'Responsive Design', level: 4 },
    { name: 'Mobile First', level: 4 },
    { name: 'Acessibilidade', level: 4 },
    { name: 'Semantic HTML', level: 4 },
    { name: 'UI Design', level: 3 },

    { name: 'Expo', level: 3 },
    { name: 'React Native', level: 3 },

    { name: 'WordPress', level: 3 },
    { name: 'CodeIgniter', level: 3 },
    { name: 'Slim Framework', level: 3 },
    { name: 'Yii', level: 2 },

    { name: 'Figma', level: 3 },
  ];

  toggleSkills(): void {
    this.showAll = !this.showAll;
  }
}
