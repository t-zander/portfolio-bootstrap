import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skills.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpService: HttpService) { }

  getSkills(): Observable<Skill[]> {
    return this.httpService.get<Skill>('skills');
  }
}
