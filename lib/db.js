const firebase = require('firebase/app');
require("firebase/database");

try {
  firebase.initializeApp({
    databaseURL: 'https://ktaio-d5f61.firebaseio.com/'
  });
} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase initialization error', error.stack);
      }
}

module.exports = firebase.database();