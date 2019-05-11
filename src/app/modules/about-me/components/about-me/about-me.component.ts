import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../../services/work-experience.service';
import { JobExperience } from '../../models/Job.models';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  jobs: JobExperience[];
  
  constructor(private workExperinceService: WorkExperienceService) { }

  ngOnInit() {
    this.workExperinceService
      .getJobExperienceList()
      .subscribe((resp: JobExperience[]) => {
        console.log(resp);
        this.jobs = resp;
      });
  }
}
