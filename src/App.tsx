import "./App.css";
import { PropertiesDisplay } from "./components/properties-display";

function App() {
  return (
    <>
      <h1 className="text-5xl">Welcome to Marvelous Mansions</h1>
      <h2 className="text-3xl">A one stop shop to your dream property!</h2>
      <h3 className="text-2xl m-4">Current property listings:</h3>

      <PropertiesDisplay />
    </>
  );
}

export default App;
