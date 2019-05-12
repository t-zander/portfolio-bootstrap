import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private afs: AngularFirestore) { }

  get <T>(collectionName: string) {
    return this.afs.collection(collectionName)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  getOne<T>(url: string) {
    console.log(url);
    
    return this.afs.doc<T>(url)
      .snapshotChanges()
      .pipe(
        map(action => {
          const id = action.payload.id;
          const data = action.payload.data() as T;
          return { id, ...data };
        })
      );
  }
}
