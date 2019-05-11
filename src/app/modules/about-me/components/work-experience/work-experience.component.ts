import { Component, OnInit, Input } from '@angular/core';
import { JobExperience } from '../../models/Job.models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() jobs: JobExperience[];

  
  tableHeaders = [
    {
      prop: 'company',
      name: 'Company'
    },
    {
      prop: 'work_period',
      name: 'Work Period'
    },
    {
      prop: 'position',
      name: 'Position'
    },
    {
      prop: 'description',
      name: 'Description'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
