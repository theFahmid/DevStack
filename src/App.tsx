import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import StackArea from "./components/stackArea";
import { Flip, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StackArea />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </>
  );
}

export default App;
