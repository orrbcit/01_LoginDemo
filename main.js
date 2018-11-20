var mainApp = {};

(function(){
    var firebase = app_firebase;
	var uid=null;


	firebase.auth().onAuthStateChanged(function(firebaseUser) {
		if(firebaseUser) {
			uid = firebaseUser.uid;
		} else{
			uid = null;
			window.location.replace("index.html");
		}
	});
	function logout(){
	    console.log("inside logout");
		firebase.auth().signOut().then(function(){
				console.log ('Signed Out');
 				signOutSuccessUrl: "index.html";
		     }, function(error) {
			    console.log ('Sign Out Error', error);
    	});
	};
    mainApp.logout = logout;
})()

