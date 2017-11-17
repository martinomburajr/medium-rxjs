import { observable } from 'rxjs/symbol/observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Rx'
import {scan} from 'rxjs/operator/scan';
import {reduce} from 'rxjs/operator/reduce';
import { AsyncScheduler } from 'rxjs/scheduler/AsyncScheduler';

@Component({
selector: 'app-episode1',
templateUrl: './episode1.component.html',
styleUrls: ['./episode1.component.scss']
})
export class Episode1Component  {

	private usersScan$: Observable<UserEntity[]>;
	private usersReduce$: Observable<UserEntity[]>;

	constructor(private afDB: AngularFireDatabase) {
		this.example1();
	// this.example2();
	// this.example3();
	// this.example3b();
	}

	/**
	 * Example 1 - Simple synchronous comparison of scan and reduce
	 * OUTPUT - Chrome Console
	 * @memberof Episode1Component
	 */
	example1() {
		// Example 1: Simple Scan
		console.log('Scan');
		const scanEx = Observable.from([1, 2, 3, 4, 5])
			.scan((accumulator, value, index) => accumulator + value, 0)
			.subscribe(response => {
			console.log(response);
	});

	// Example 1: Simple Reduce
	console.log('Reduce');
	Observable.from([1, 2, 3, 4, 5])
		.reduce((accumulator, value, index) => (accumulator + value), 0)
		.subscribe(response => {
		console.log(response);
	});
	}

	/**
	 * Example 2 - Simple Asynchronous comparison of scan and reduce
	 * OUTPUT - Chrome Console
	 *
	 * @memberof Episode1Component
	 */
	example2() {
		Observable.from(['r', 'x', 'j', 's'])
			.scan((accumulator, value, index) => accumulator + value, '')
			.subscribe(response => {
			console.log(response);
		});

	Observable.from(['r', 'x', 'j', 's'])
		.reduce((accumulator, value, index) => accumulator + value, '')
		.subscribe(response => {
		console.log(response);
		});
	}

	/**
	 * Example 3 - Asynchronous Backend Calls
	 * OUTPUT - UI & CHROME CONSOLE
	 * @memberof Episode1Component
	 */
	example3() {

	this.afDB.list('user')
	// 	.scan((accumulator, value, index) => accumulator.concat(value), new Array<{}>())
	// 	.subscribe(response => {
	// 	this.usersScan$ = response;
	// 	console.log(response);
	// });

	this.afDB.list('user')
	// 	.reduce((accumulator, value, index) => accumulator.concat(value), new Array<{}>())
	// 	.subscribe(response => {
	// 	this.usersReduce$ = response;
	// 	console.log(response);
	// });
	}

	/**
	* Example 3b - Terminating the reduce operator
	* OUTPUT - UI & CHROME CONSOLE;
	* @memberof Episode1Component
	*/
	example3b() {
	/**
	* This scan example is identical to the one in example3. Nothing has changed
	*/
	this.afDB.list('user')
	// 	.scan((accumulator, value, index) => accumulator.concat(value), new Array<{}>())
	// 	.subscribe(response => {
	// 	this.usersScan$ = response;
	// 	console.log(response);
	// });

	/**
	* We use the takeUntil operator that takes an observable with a timer of 3 seconds, once completed, it terminates the initial observable this.afdb.list). allowing reduce to run.
	*/
	this.afDB.list('user')
		// .valueChanges()
		// .takeUntil(Observable.timer(3000))
		// .reduce((accumulator, value, index) => accumulator.concat(value), new Array<{}>())
		// .subscribe(response => {
		// this.usersReduce$ = response;
		// console.log(response);
		// });
		}
}

	/**
	* The class encapsulating a user object.
	*
	* @class UserEntity
	*/
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


