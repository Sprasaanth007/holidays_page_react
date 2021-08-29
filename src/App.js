import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="structure">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
