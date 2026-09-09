import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})

export class ProjectsComponent {
  projects = [
    {
      title: 'Party Hug',
      description: 'Plataforma para gerenciamento de consumo e pagamentos em eventos.',
      technologies: ['Laravel', 'React', 'React Native', 'Docker', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/stylbandeira/party-hug'
    },
    {
      title: 'OIAI',
      description: 'Aplicação para criação de listas e comparação de preços.',
      technologies: ['Laravel', 'React', 'MySQL'],
      github: 'https://github.com/stylbandeira/oiai'
    }
  ];
}
