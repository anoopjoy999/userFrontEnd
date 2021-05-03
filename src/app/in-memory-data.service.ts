import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
    providedIn: 'root',
  })

  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const users = [
        { id: '10', username:'user1',password:'password1',fname:'fname1',lname:'lname1',address:'address1',email:'email1',gender:'gender1',picker:'6/15/15'},
        { id: '11', username:'user2',password:'password2',fname:'fname2',lname:'lname2',address:'address2',email:'email2',gender:'gender2',picker:'7/15/15'},
        { id: '12', username:'user3',password:'password3',fname:'fname3',lname:'lname3',address:'address3',email:'email3',gender:'gender3',picker:'8/15/15'},
        { id: '13', username:'user4',password:'password4',fname:'fname4',lname:'lname4',address:'address4',email:'email4',gender:'gender4',picker:'9/15/15'},
        { id: '14', username:'user5',password:'password5',fname:'fname5',lname:'lname5',address:'address5',email:'email5',gender:'gender5',picker:'10/15/15'},
        { id: '20', username:'user6',password:'password6',fname:'fname6',lname:'lname6',address:'address6',email:'email6',gender:'gender6',picker:'11/15/15'}
      ];
      return {users};
    }

    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): string {
    return '100';
  }
}
