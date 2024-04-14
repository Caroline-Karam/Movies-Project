import Login from "./components/Login"
import  NavScroll  from "./components/NavScroll"
import Signup from "./components/Signup"
import Todo from "./components/Todo"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from "./components/Movie/Movies"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Details from "./components/Movie/details"
import { Provider } from "react-redux"
import store from "./components/store/store"
import Favorite from "./components/Favorite"
import {LanguageProvider} from "./components/contexts/Language"
import { useState } from "react"
import Footer from "./components/Footer"

function App() {

  const [language,setLanguage]=useState("en")


  return (
    <> 
    <LanguageProvider value ={{language,setLanguage}}>
    <Provider store={store}>
    <BrowserRouter>
    <NavScroll/>
     <div className="container m-5">
     <Routes>
     <Route path="/" element={<Login/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movie/:id" element={<Details/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/fav" element={<Favorite/>}/>
      </Routes>
     </div>
     <Footer/>
    </BrowserRouter>
    </Provider>
    </LanguageProvider>
    {/* <Todo/> */}
    </>

  ) 
}

export default App
