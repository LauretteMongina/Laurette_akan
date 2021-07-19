function getInput() {
  var date = parseInt(
  document.getElementById("day").value
  );
  var month = parseInt(
      document.getElementById("month").value
      );
      var year = parseInt(
      document.getElementById("year").value);
      var gender = document.querySelectorAll('input[name="Options"').value;

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
      if (weekDay === 0 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } 
      else if (weekDay === 1 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } 
      else if (weekDay === 2 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 3 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 4 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 5 && gender === document.getElementById("maleR").checked) {
      return alert(          
        "Yikes! Your Akan name is  " +
          akanMale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 6 && gender === document.getElementById("maleR").checked) {
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
      } else if (weekDay === 1 && gender === document.getElementById("femaleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 2 && gender === document.getElementById("femaleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 3 && gender === document.getElementById("femaleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 4 && gender === document.getElementById("femaleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 5 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
      } else if (weekDay === 6 && gender === document.getElementById("maleR").checked) {
      return alert(
          "Yikes! Your Akan name is  " +
          akanFemale[weekDay] +
          ("  .You were born on a  " + daysOfTheWeek[weekDay]));
  }
}