// Load this script file at the beginning of all HTML files, before body
// <script src="setup_firebase.js"></script>

(function(){
    // Insert your firebase init script here.
    // You can find it from firebase console "add project" .
    // Begin init code
    
    //(function(){  
    //var config = {
    // apiKey: 
    // authDomain: 
    // databaseURL: 
    // projectId: 
    // storageBucket: 
    // messagingSenderId: 
    //};
    //firebase.initializeApp(config);
        

    // End of init code
    
    // Add following line to get a unique (global) ref to the the database,
    // so that when we need to use the database later, 
    // we can create a locally scoped reference.
    app_firebase = firebase; 
})();

