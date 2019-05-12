import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Work } from '../models/works.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private httpService: HttpService) { }

  getWorks(): Observable<Work[]> {
    return this.httpService.get<Work>('works');
  }

  getWorkById(workId: string): Observable<Work> {
    return this.httpService.getOne<Work>(`works/${workId}`);
  }
}
