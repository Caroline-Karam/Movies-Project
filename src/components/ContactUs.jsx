import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { counterContext } from '../../contexts/counter';
import { languageContext } from './contexts/Language';

const ContactUs = () => {

    const navigate = useNavigate()


    const {language,setLanguage } = useContext(languageContext)


    const handleNavigation = () => {
        navigate('/about')

  

    }

    const handleChange=()=>{
    
        return (((language=="en")?setLanguage('ar'):setLanguage('en')))
      
        }


    return (
        <div>
         

            Contact Us {language}
            <button className="btn btn-primary m-3" onClick={()=>{handleNavigation()}}>Click Me</button>

            <button className="btn btn-danger" onClick={()=>{handleChange()}}>AR or EN</button>
        </div>
    );
}

export default ContactUs;