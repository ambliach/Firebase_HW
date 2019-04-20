var config = {
    apiKey: "AIzaSyBgssMLRPDWcTz4um4cSH8BNSbDPWULBmE",
    authDomain: "fir-hw-b8cd3.firebaseapp.com",
    databaseURL: "https://fir-hw-b8cd3.firebaseio.com",
    projectId: "fir-hw-b8cd3",
    storageBucket: "fir-hw-b8cd3.appspot.com",
    messagingSenderId: "28244653874"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function firebaseAddTrain(name, time) {
   database.ref('trains/').push({
      trainName: name,
      firstTime: moment(time, "HH:mm").format("dddd, MMMM Do YYYY, h:mm:ss a")
    });
  }
  database.ref('trains/').on("child_added", function(SnapShot, prevChildKey){
    var timer = SnapShot.val().firstTime;
    var timeObj = moment(timer,"dddd, MMMM Do YYYY, h:mm:ss a").subtract(1, "years").format("dddd, MMMM Do YYYY, h:mm:ss a");

    console.log(timeObj);
  })
  
  var time = "8:52";
  //var date = new Date();
  
  //console.log(moment(time, "HH:mm"))

 document.getElementById("submitFirebase").addEventListener("click", function(){
     firebaseAddTrain("NJ Transit", time)
 })

 //pass in frequency (how often train comes)
 //create algor which creates when next train comes
 //dumb all data in tables and shit man