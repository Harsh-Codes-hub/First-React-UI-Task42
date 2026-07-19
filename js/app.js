import Navbar from "./navbar.js";
import Hero from "./hero.js";

function App() {
  return React.createElement(
    "div",
    null,
    Navbar(),
    Hero(),
);}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());
