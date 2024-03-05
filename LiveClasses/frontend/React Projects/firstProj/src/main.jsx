import ReactDom from "react-dom/client";
import App from "./App";
import UsersList from "./exercises/UsersList";
import Event from "./exercises/Event";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Event />);
// root.render(<App1 />);
