import { Provider } from "react-redux";
import myStore from "./Store/Store.js";
import { RouterProvider } from "react-router";
import { myRouter } from "./router";
import './App.css'

function App() {
  return (
    <Provider store={myStore}> 
      <RouterProvider router={myRouter} />
    </Provider>
  );
}

export default App;
