import Home from "./components/HomeScreen";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css'
import './override.css'
import RecipeScreen from "./components/RecipeScreen";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/recipes/:recipeId" element={<RecipeScreen/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
