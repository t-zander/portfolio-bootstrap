import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/skills.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Skill[];
  
  constructor() { }

  ngOnInit() {
  }

}
