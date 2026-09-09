import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  projects = [
    {
      title: 'Party Hug',
      description: 'Plataforma para gerenciamento de consumo e pagamentos em eventos.',
      technologies: ['Laravel', 'React', 'React Native', 'Docker'],
      github: 'https://github.com/seu-usuario/party-hug'
    },
    {
      title: 'OIAI',
      description: 'Aplicação para criação de listas e comparação de preços.',
      technologies: ['Laravel', 'React', 'MySQL', 'Redis'],
      github: 'https://github.com/seu-usuario/oiai'
    }
  ];
}
