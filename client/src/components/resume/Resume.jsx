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
  return (<>
    <div className='resume-wrapper'>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>

    </div>
      <a
        className='resume-download'
        href="https://drive.google.com/uc?export=download&id=13O1ix-3WMe-mfYpmKFA76fXVhb0mRN_4"
        >
        Download my resume here!
      </a>
        </>
  )
}

export default Resume