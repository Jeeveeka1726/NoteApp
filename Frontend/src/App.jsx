import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import NoteDetails from "./pages/NoteDetails";
import EditForm from "./pages/EditForm";
import LandingPage from "./pages/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}></Route>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/add"} element={<AddForm />}/>
                    <Route path={"/details/:id"} element={<NoteDetails />} />
                    <Route path={"/edit/:id"} element={<EditForm />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
