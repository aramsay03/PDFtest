import './App.css';
// import CreatePdf from './labelmaker';
import CreatePdf from './html2canvasDemo';
// import htmlDoc from './testtemplate';

// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

// async function createPdf({pdftext}) {
//   const pdfDoc = await PDFDocument.create()
//   const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

//   const page = pdfDoc.addPage()
//   const { width, height } = page.getSize()
//   const fontSize = 30
//   page.drawText(`${pdftext}`, {
//     x: 50,
//     y: height - 4 * fontSize,
//     size: fontSize,
//     font: timesRomanFont,
//     color: rgb(0, 0.53, 0.71),
//   })

//   const pdfBytes = await pdfDoc.save()
// }

// export default createPdf;

function App() {

  const input = {
    namefull: "Amanda Ramsay",
    qrcode: {id: 'S-TE-3242734987', createdAt: '34283sdk93'}
  }

  const handlePDFCreate = () => {
    // const text = 'WOW I created a DPF';
    CreatePdf(input)
  } 

  return (
    <div className="App">
      <header className="App-header">
        
        <button
          onClick={handlePDFCreate}
          >
          Download PDF
        </button>
      </header>
    </div>
  );
}

export default App;