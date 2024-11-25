import { useRouteError } from "react-router-dom";
import Layout from '@/components/common/layout';

interface ErrorWithMessage {
  message?: string;
}

interface ResponseError {
  statusText?: string;
}

// Menggabungkan kedua interface sebelumnya
type CustomError = ErrorWithMessage | ResponseError;

export default function ErrorPage() {
  const error = useRouteError() as CustomError; // Cast ke CustomError
  console.error(error);

  let message;
  if ("message" in error) {
    // Jika error memiliki properti message
    message = error.message;
  } else if ("statusText" in error) {
    // Jika error memiliki properti statusText
    message = error.statusText;
  } else {
    // Fallback jika tipe error tidak dikenal
    message = "An unknown error occurred";
  }
  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </Layout>
  );
}
