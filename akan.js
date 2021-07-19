function getInput() {
  var date = parseInt(
  document.getElementById("day").value
  );
  var month = parseInt(
      document.getElementById("month").value
      );
      var year = parseInt(
      document.getElementById("year").value);
      var male = document.getElementById("maleR");
      var female = document.getElementById("femaleR");

      var dateOfBirth = new Date(year + "/" + month + "/" + date);
      var weekDay = dateOfBirth.getDay();

      if (month < 1 || month > 12 || (month == 2 && date > 29)) {
          return alert("Enter a valid month!")}
          else if (date < 1 || date > 31) {
          return alert("Enter a valid date!");
          } 
          else if (year === NaN || year < 1900 || year > 2100) {
          return alert ("Enter a valid year");
          }
          var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

          var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      
          var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       
      if (weekDay === 0 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } 
      else if (weekDay === 1 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } 
      else if (weekDay === 2 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 3 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 4 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if ((weekDay === 5) && (male.checked)) {
      return alert(          
        "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 6 && male.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      }
  
      if (weekDay === 0 && gender === "female") {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 1 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 2 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 3 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 4 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 5 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 6 && female.checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
  }
document.getElementsByClassName("date").reset();}