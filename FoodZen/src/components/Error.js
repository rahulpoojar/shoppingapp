import { useRouteError } from "react-router";
import Header from "./Header";

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md bg-white shadow-lg p-8 rounded-lg border border-red-500">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Oops!An Error Occurred
          </h1>
          <h2 className="text-2xl text-gray-700 mb-2">
            Error Status: {err.status}
          </h2>
          <h3 className="text-xl text-gray-500 mb-4">{err.statusText}</h3>
          <p className="text-md text-gray-400">
            Something went wrong while processing your request.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
