import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Work } from '../../models/works.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {
  works$: Observable<Work[]>;
  
  constructor(private worksService: WorksService) { }

  ngOnInit() {
    this.works$ = this.worksService.getWorks();
  }

}
