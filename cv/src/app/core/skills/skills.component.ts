import { Component } from '@angular/core';

interface Skill {
  img: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      img: '../../../assets/js.png',
      name: 'JavaScript'
    },
    {
      img: '../../../assets/ts.png',
      name: 'TypeScript'
    },
    {
      img: '../../../assets/ang.png',
      name: 'Angular'
    },
    {
      img: '../../../assets/rxjs.png',
      name: 'RxJs'
    },
    {
      img: '../../../assets/node.png',
      name: 'NodeJs'
    },
    {
      img: '../../../assets/nest.png',
      name: 'NestJs'
    },
    {
      img: '../../../assets/ws.png',
      name: 'WebSocket'
    },
    {
      img: '../../../assets/wp.png',
      name: 'Webpack'
    },
    {
      img: '../../../assets/rest.png',
      name: 'REST API'
    },
    {
      img: '../../../assets/git.png',
      name: 'Git'
    },
    {
      img: '../../../assets/bs.png',
      name: 'Bootstrap'
    },
    {
      img: '../../../assets/figma.png',
      name: 'Figma'
    }
  ];
}