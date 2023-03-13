import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/contact.component";
import Directories from "./components/directories/directories.component";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./components/shop/shop.component";
import Sign from "./components/signing/sign.component";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Directories />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign" element={<Sign />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/home" replace />} />  ADD EXACT TO UP*/}
      </Routes>
    );
  }
}

export default App;
