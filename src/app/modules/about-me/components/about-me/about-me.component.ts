import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../../services/work-experience.service';
import { JobExperience } from '../../models/Job.models';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skills.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  jobs: JobExperience[];
  skills$: Observable<Skill[]>;
  
  constructor(
    private workExperinceService: WorkExperienceService,
    private skillsService: SkillsService
    ) { }

  ngOnInit() {
    this.workExperinceService
      .getJobExperienceList()
      .subscribe((resp: JobExperience[]) => {
        console.log(resp);
        this.jobs = resp;
      });

    this.skills$ = this.skillsService.getSkills()
  }
}
