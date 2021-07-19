  var d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var myBirthday = document.getElementById("date");
  var myGender = document.getElementById("Radio").value;
  var dob = new Date(myBirthday);
  var dayOfTheWeek = dob.getDay();

  var akanFemale =[
    "Akosua",
    "Adwoa",
    "Abena",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
      
  ]
  var akanMale = [
     "Kwasi",
     "Kwadwo",
     "Kwabena",
     "Kwaku",
     "Yaw",
     "Kofi",
     "Kwame",]
function getInput() {
  if (myBirthday.value === ""){
    alert("My birthday cannot be empty")
  }
  // if (myBirthday.value = moment(11/06/2000, mm/DD/YYYY).isValid()){
  //   alert("Birthday is valid")
  // }
  else
    for(var i = 0; i<akanMale.length;i++){
    if(myGender.value == "male" ){
    
    console.log("Yikes!Your Akan name is" + akanMale[dob.getDay()])
  }}
  for(var i = 0; i<=akanFemale.length;i++){
    if(myGender.value == "female"){

  
    console.log("Yikes!Your Akan name is" + akanFemale[dob.getDay()])}
  }
 
}
  document.querySelector("button")
  .addEventListener("click",(event)=>{
    event.preventDefault();
;})