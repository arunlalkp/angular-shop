import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products')
    .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => (Object.assign({}, c.payload.val(), {key:c.payload.key})))
        })
      );
  }

  get(productId:string):Observable<any>{
  
    return this.db.object('/products/'+ productId).valueChanges()
  }
}
