const submitData = {
    userName: "Keziah Okyere",
    userEmail: "keziah.okyere@student.moringaschool.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
        alert("Oops!!! an error occurred, sorry");
        console.log(error.message);
      });