import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/HomePage";

const ProductPage = lazy(() => import("./Components/ProductPage"));

function App() {
  const emailuuid = useSelector((state) => state.crudTodo.emailuuid);
  return (
    <>
      {emailuuid ? (
        <Suspense
          fallback={
            <h1
              style={{
                display: "grid",
                placeContent: "center",
                color: "rebeccapurple",
                fontSize: 100,
              }}
            >
              Loading...
            </h1>
          }
        >
          <ProductPage />
        </Suspense>
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;
