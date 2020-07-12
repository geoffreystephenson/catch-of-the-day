import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCwq6U5F5cEMltZ-W7ZhbbU1PfXXqcbor8',
	authDomain: 'elevated-surge-173215.firebaseapp.com',
	databaseURL: 'https://elevated-surge-173215.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
