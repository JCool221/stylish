import { useEffect, useRef } from 'react';
import pdfjsLib from 'pdfjs-dist';

const Resume = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPdf = async () => {
      try {
        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        // Get the first page of the PDF
        const page = await pdf.getPage(1);

        // Set up the canvas
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });
        const scale = canvas.clientWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        // Set the canvas dimensions based on the scaled viewport
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the page to the canvas
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };
        await page.render(renderContext);
      } catch (error) {
        console.error('Error rendering PDF:', error);
      }
    };

    renderPdf();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} style={{ width: '50%' }} />;
};

export default Resume;
