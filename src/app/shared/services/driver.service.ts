import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  collectionName = 'Drivers';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(driver: Driver) {
    return this.afs.collection<Driver>(this.collectionName).doc(driver.race_number).set(driver);
  }

  getAll() {
    return this.afs.collection<Driver>(this.collectionName).valueChanges();
  }

  getById(race_number: string) {
    return this.afs.collection<Driver>(this.collectionName).doc(race_number).valueChanges();
  }

  update(driver: Driver) {
    return this.afs.collection<Driver>(this.collectionName).doc(driver.race_number).set(driver);
  }

  delete(race_number: string) {
    return this.afs.collection<Driver>(this.collectionName).doc(race_number).delete();
  }
}
