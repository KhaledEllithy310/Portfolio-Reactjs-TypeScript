import "./App.css";
import { navigation } from "./Data";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar navigation={navigation} />
    </>
  );
}

export default App;
