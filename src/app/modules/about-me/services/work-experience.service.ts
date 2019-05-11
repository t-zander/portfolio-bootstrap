import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';
import { JobExperience } from '../models/Job.models';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private httpService: HttpService) { }

  getJobExperienceList(): Observable<JobExperience[]> {
    return this.httpService.get<JobExperience>('job-experince-list');
  }
}
