import "../App.css";
import Navbar from "../components/Navbar";
import System from "../containers/System";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <System />
      </div>
    </>
  );
}

export default App;
