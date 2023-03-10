import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/contact.component";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./components/shop/shop.component";
import Home from "./routes/home/home.component.jsx";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="sign-in" element={<Signing />} /> */}
        </Route>
        {/* <Route path="*" element={<Navigate to="/home" replace />} />  ADD EXACT TO UP*/}
      </Routes>
    );
  }
}

export default App;
