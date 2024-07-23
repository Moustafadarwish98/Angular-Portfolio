import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  @Input() projectName:string = "";
  @Input() usedLang1:string ="";
  @Input() usedLang2:string ="";

}
