/* eslint-disable no-unused-vars */

import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading/Loading";
import AppRouter from "./router/AppRouter";
import TransitionWrapper from "./components/Transition/TransitionWrapper";

function App() {
  return (
    <div className="App">
      <Loading />
      <AppRouter />
    </div>
  );
}

export default App;
