import { useQuery } from '@apollo/client';
import { Container } from "@mui/material";
import * as React from "react"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { contentfulCVQuery } from './utils/contentfulQueries';

const CVPage = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const { loading, error, data } = useQuery(contentfulCVQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { cv } = data.biographyCollection.items[0];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={cv.url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CVPage;
