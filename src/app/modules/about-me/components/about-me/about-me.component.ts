import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../../services/work-experience.service';
import { JobExperience } from '../../models/Job.models';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skills.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  jobs: JobExperience[];
  skills: Skill[];
  
  constructor(
    private workExperinceService: WorkExperienceService,
    private skillsService: SkillsService
    ) { }

  ngOnInit() {
    this.workExperinceService
      .getJobExperienceList()
      .subscribe((resp: JobExperience[]) => {
        this.jobs = resp;
      });

    this.skillsService.getSkills()
      .subscribe((resp: Skill[]) => {
        this.skills = resp;
      });
  }
}
