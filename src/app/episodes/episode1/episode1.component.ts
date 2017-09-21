import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Rx'
import * as firebase from 'firebase/app';
import 'rxjs/Rx'

@Component({
  selector: 'app-episode1',
  templateUrl: './episode1.component.html',
  styleUrls: ['./episode1.component.scss']
})
export class Episode1Component  {

  constructor(private afDB: AngularFireDatabase) {
    this.example1();
    this.example3();
  }

  /**
   * Simple Map example
   *
   * @memberof Episode1Component
   */
  example1() {
    // Map user to entity
    const user = new UserEntity();
    this.afDB.object('/user/-KuL7eMizDwP503h8MZT')
                .map(userObject => user.convertObjectToEntity(userObject['$key'], userObject))
                .subscribe(userEntity => console.log(userEntity));
  }

  example3() {
    // Merging multiple tables into a single entity WITHOUT MergeMap
    this.afDB.object('/fight-event/-KHQ228-Hdin5naJrusf')
        .map((fightEventObj: {}) => {
          return Array<{}>(fightEventObj['fighters']).map(fighter => {
            return fighter['$key'];
          }).map(fighterKey => this.afDB.object('/user/ ' + fighterKey))
        }).subscribe(x => {
          console.log('Merging multiple tables into a single entity WITHOUT MergeMap');
          console.log(x)
        })

      //// Merging multiple tables into a single entity WITHOUT MergeMap
      this.afDB.object('/fight-event/-KHQ228-Hdin5naJrusf')
        .map((fightEventObj: {}) => {
          return Array<{}>(fightEventObj['fighters']).map(fighter => {
            console.log(fighter)
            return Object.keys(fighter);
          }).map(fighterKey => this.afDB.object('/user/ ' + fighterKey))
        }).flatMap(observables => observables).flatMap(observables => observables).subscribe(x => {
          console.log('Merging multiple tables into a single entity WITH MergeMap');
          console.log(x)
        });
  }
}

class UserEntity {
  key: string;
  name: string;
  username: string;
  bio: string;

  convertObjectToEntity(key: string, object: {}): UserEntity {
    const user = new UserEntity();
    user.name = object['name']
    user.key = key;
    user.bio = object['bio'];
    user.username = object['username'];
    return user;
  }
}


