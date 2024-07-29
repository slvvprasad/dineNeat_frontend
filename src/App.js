import "./styles.css";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Book from "./components/Book";
import Visakhapatnam from './components/Cityrestaurants/Visakhapatnam';
import PaymentGatewayPage from "./components/PaymentGatewayPage";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="reg" element={<Register/>}/>
        <Route path="book" element={<Book/>}/>
        <Route path="visakhapatnam" element={<Visakhapatnam/>}/>
        <Route path="book/pay" element={<PaymentGatewayPage/>}/>
      </Routes>
     
    </div>
  );
}
