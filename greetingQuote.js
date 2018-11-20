(function(){

    var firebase = app_firebase;
    
    // display personalized Hello line
    // construct "banner" and "quote" strings
    
    var banner = document.getElementById("banner");
    var quote = document.getElementById("quote");
    var userName = "Hello my friend";
    var userQuote = "Login to get your quote";

    //If the current user is authenticated then
    //	grab userName
    //	grab quote from database
    //	update "quote" DOM
    //	Finally, update "hello" DOM
    
    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          	userName=user.displayName;
	  		//console.log (userName);
	  		//display quote from database 
			var dbRef = firebase.database().ref().child('message');
			dbRef.on('value', function(snap){
                userQuote = snap.val();
                quote.innerText = userQuote;
                banner.innerText = "Hello " + userName;
            });
    	} else {
                quote.innerText = userQuote;
                banner.innerText = "Hello " + userName;
        }        
    });
})();

