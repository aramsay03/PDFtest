// import React from "react";
// import jsPDF from "jspdf";
// import htmlDoc from './testtemplate';
// var fs = require('fs');
// var pdf = require('html-pdf');
import fs, { readFileSync } from 'fs';
import pdf from 'html-pdf';





// var specialElementHandlers = {
//   "#editor":function(element,renderer){
//     return true;
//   }
// }

async function createPdf(htmlDoc) {

  const html = fs.readFileSync('./businesscard.html', 'utf8');
  
  var options = { format: 'A4' };

  pdf.create(html, options).toFile('./demo.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});

  // var doc = new jsPDF('p', 'pt');
      
  // doc.fromHTML(("#target").html(htmlDoc),15,15,{
  //   "width":170,
  //   "elementHandlers":specialElementHandlers
  // })
  
  // doc.save('demo.pdf')  

};

export default createPdf;