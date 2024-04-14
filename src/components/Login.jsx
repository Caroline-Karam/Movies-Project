import React  , {useState} from 'react';
import { useForm } from 'react-hook-form'
import{Link} from "react-router-dom"
function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm({mode:'onChange'})
    console.log(errors);

    // const [user,setUser]= useState({
    //   email: '',
    //   password: ''
    // })

    // const [errors,setErrors] = useState({
    //     emailError:null,
    //     passwordError:null
    //    })

    // const handleChange=(evt)=>{
    //   if(evt.target.name=='email'){
    //     setUser({...user,email:evt.target.value})
    //     setErrors({...errors,emailError:(evt.target.value.length==0)?'Email is Required':(evt.target.value.includes('@'))?'':'Email must include @'})

    //   }else if(evt.target.name=='password'){
    //     setUser({...user,password:evt.target.value})
    //     setErrors({...errors,passwordError:(evt.target.value.length==0)?'Password is Required':''})


    //   }
    // }

    // const handleSubmit=(evt)=>{

    //     evt.preventDefault();
    //     if(!errors.emailError&&!errors.passwordError){
    
    //     }
    
    // }
    return(
       <>
       <div className='login tamplate d-flex justify-content-center align-item-center 100-w '>
       <div className='border border-dark m-5 p-5 rounded bg-white '>
       <form onSubmit={(e)=>{handleSubmit(e)}} >
            <h3 className='text-center'>Login</h3>
            <div className='mb-3'>
                <label htmlFor='email' className='mb-2'>Email</label>
                <input type="email" placeholder='Enter your Email' className={`form-control ${(errors.emailError)?'border-danger shadow-none':''}`}
                // value={user.email}
                // onChange={(e)=>{handleChange(e)}}
                // name="email"
                {...register("email", { required: true, pattern: /^[a-zA-Z]{3,15}(@)(gmail|yahoo)(.com)$/ })}
                id="exampleInputEmail1" 
                 />
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='mb-2'>Password</label>
                <input type="password" placeholder='Enter your password' className='form-control'
                // value={user.password}
                // onChange={(e)=>{handleChange(e)}} 
                // name="password"
                {...register('password', { required: true })}
                id="exampleInputPassword1" />
            </div>
           <div>
            <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
            <label htmlFor='check' className='custom-input-label ms-2'>
                Remember me
            </label>
            </div> 
            <div className='d-grid'>
                <button type="submit" className='btn btn-primary m-3 p-1'>Login</button>
            </div>
            <p className='text-right'>
                Forget <Link to="/signup" style={{marginRight:"15px"}}>Password?</Link>
                       <Link to="/signup">Sign up</Link>
            </p>
        </form>
       </div>
        </div> 
       </>
    );
}

export default Login;

