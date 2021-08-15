// import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import htmlDoc from './testtemplate.js';
// import {html2canvas, jsPDF} from 'app/ext';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default async function CreatePdf() {

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas);  // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf"); 
    });
     
    // const printDocument = () => {
    //     const input = document.getElementById('Text to display');
    //     html2canvas(input)
    //     .then((canvas) => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, 'JPEG', 0, 0);
    //         // pdf.output('dataurlnewwindow');
    //         pdf.save("download.pdf");
    //     })
    //     ;
    // }

    // return (
    //     <div>
    //     <div className="mb5">
    //         <button onClick={printDocument}>Print</button>
    //     </div>
    //     <div id="divToPrint" className="mt4"
    //     // {...css({
    //     //     backgroundColor: '#f5f5f5',
    //     //     width: '210mm',
    //     //     minHeight: '297mm',
    //     //     marginLeft: 'auto',
    //     //     marginRight: 'auto'
    //     // })}
    //     >
    //         <div>Note: Here the dimensions of div are same as A4</div> 
    //         <div>You Can add any component here</div>
    //     </div>
    //     </div>
    // );
}