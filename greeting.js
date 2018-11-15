(function(){

    var firebase = app_firebase;
    // display personalized Hello line
    var banner = document.getElementById("banner");

    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          user=user.displayName;
	  console.log (user);
    	} else {
	  user="my friend";
    	}
        banner.innerText = "Hello " + user;
    });

    // display quote from database 
    var quote = document.getElementById('quote');
    var dbRef = firebase.database().ref().child('message');
    dbRef.on('value', snap => quote.innerText = snap.val());

})();

