import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handlePreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function handleNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }


  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="resume d-flex flex-column align-items-center justify-content-center">
          <h2>Resume</h2>
          <Document
            file="/pdfs/Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Button variant="secondary" onClick={handlePreviousPage}>Previous Page</Button>
          <Button variant="secondary" onClick={handleNextPage}>Next Page</Button>
        </Col>
        <Col md={6} className="cover-letter d-flex flex-column align-items-center justify-content-center">
          <h3>Cover letter</h3>
          <Document
            file="/pdfs/Cover_Letter.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
          </Document>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;