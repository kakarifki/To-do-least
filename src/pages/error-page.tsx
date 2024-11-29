import { useRouteError } from "react-router-dom";
import Layout from '@/components/common/layout';

interface ErrorWithMessage {
  message?: string;
}

interface ResponseError {
  statusText?: string;
}

type CustomError = ErrorWithMessage | ResponseError;

export default function ErrorPage() {
  const error = useRouteError() as CustomError;
  console.error(error);

  let message;
  if ("message" in error) {
    message = error.message;
  } else if ("statusText" in error) {
    message = error.statusText;
  } else {
    message = "An unknown error occurred";
  }
  return (
    <Layout>
      <div id="error-page" className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg italic">
          <i>{message}</i>
        </p>
      </div>
    </Layout>
  );
}
