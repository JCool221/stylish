import { Document, Page } from 'react-pdf'
import resume from '../../assets/resume.pdf'
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Resume() {
    console.log(resume)
  return (
    <div className='resume-wrapper'>
        <Document file={resume}>
            <Page pageNumber={1} />
        </Document>
        <Document file={resume}>
            <Page pageNumber={2} />
        </Document>

    </div>
  )
}

export default Resume