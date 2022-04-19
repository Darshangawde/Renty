import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "antd/dist/antd.css";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";
import AdminLogin from "./pages/AdminLogin";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/adminlogin" exact component={AdminLogin} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/aboutus" exact component={AboutUs} />
      </BrowserRouter>

      <BrowserRouter>
        <AdminRoute path="/addcar" exact component={AddCar} />
        <AdminRoute path="/editcar/:carid" exact component={EditCar} />
        <AdminRoute path="/admin" exact component={AdminHome} />
      </BrowserRouter>

      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/booking/:carid" exact component={BookingCar} />
        <ProtectedRoute path="/userbookings" exact component={UserBookings} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export function AdminRoute(props) {
  if (localStorage.getItem("admin")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/adminlogin" />;
  }
}
