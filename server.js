// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package


// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
// use a templated html document with handlebars found in views/pages folder
app.set('view engine', 'hbs');
// converts text-based data JSON input into JS accessible variables.
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData)
    formData.gradelevel = determineGL(formData.gradelevel);
    formData.internextern = determineIE(formData.internextern);
    formData.preferredoc = determinePOC(formData.preferredoc);
    res.render('pages/acceptFormData.hbs', {formData});
})

function determineGL(gradelevel) {
  let dGraLev="";
  if (gradelevel == "seven") {dGraLev = "Grade 7";}
  else if (gradelevel = "eight") {dGraLev = "Grade 8";}
  else if (gradelevel = "nine") {dGraLev = "Grade 9";}
  else if (gradelevel = "ten") {dGraLev = "Grade 10";}
  else if (gradelevel = "eleven") {dGraLev = "Grade 11";}
  else {dGraLev = "Grade 12";}
    console.log(dGraLev);
  return dGraLev; 
}

function determineIE(internextern) {
  let dIntExt="";
  if (internextern == "intern") {dIntExt = "Intern";}
  else {dIntExt = "Extern";}
    console.log(dIntExt);
  return dIntExt; 
}

function determinePOC(preferredoc) {
  let dOrgClu="";
  if (preferredoc == "oc1") {dOrgClu = "Girl Scouts";}
  else if (preferredoc = "oc2") {dOrgClu = "Boy Scouts";}
  else if (preferredoc = "oc3") {dOrgClu = "Book Club";}
  else if (preferredoc = "oc4") {dOrgClu = "Fencing Club";}
  else {dOrgClu = "Theatre Club";}
    console.log(dOrgClu);
  return dOrgClu; 
}


// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
