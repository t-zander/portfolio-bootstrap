import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { WorksService } from '../../services/works.service';
import { Work } from '../../models/works.models';
import { Observable, forkJoin } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  workDetails: Work;
  imagesUrls: string[] = [];
  isLoading = true;

  constructor(
    private afStorage: AngularFireStorage,
    private activatedRoute: ActivatedRoute,
    private worksService: WorksService) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          this.isLoading = true;
          return this.worksService.getWorkById(params.workId)
        })
      )
      .subscribe((resp: Work) => {
        this.isLoading = false;
        this.workDetails = resp;
        this.getImageUrls();
      });
  }

  getImageUrls() {
    this.imagesUrls = [];
    const imgUrls = this.workDetails.images
      .map(image => this.afStorage.ref(image).getDownloadURL());
    
    forkJoin(imgUrls)
      .subscribe((response: string[]) => {
        this.imagesUrls = response;
      });
  }
}
