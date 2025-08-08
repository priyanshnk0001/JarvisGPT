import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './password.css'

// import { Link } from 'react-router-dom';


function Password() {
    const location = useLocation();
    const email = location.state.email;
    const [password, setPassword] = useState('')
     const [showPassword, setShowPassword] = useState(false)
    

     

     const navigate = useNavigate();

    const showHidePassword = () => {
        setShowPassword(!showPassword)
    }
    let submit = (e) => {
        e.preventDefault();
        let passwordvalue = event.target.password.value;

        const isValid = passwordvalue.length >= 6;


        if (isValid) {
            setPassword(passwordvalue);
            navigate('/otp', {state:{email,  password:passwordvalue}})
            

        }else{
             alert("Please enter a valid password");

        }
        console.log(password)
    }

    
    




    return (
        <>
            <div>
                <div className='w-[100%] flex'>
                    <h1 className='text-[30px] jarvisGPT '>JarvisGPT</h1>
                </div>

                <div>
                    <h1 className='text-[40px] mt-35 welcomeBack '>Welcome back </h1>
                </div>

                <form
                    onSubmit={submit}
                    className='flex justify-center mt-3  '>
                    <div className='flex flex-col gap-3 '>
                        <input name='password'
                            id='passwordInput'
                            sx={{}}
                            placeholder='Enter password'
                            className='w-[450px] border-1 border-[gray] rounded-4xl p-5  mt-3 '
                            type={showPassword ? 'text' : 'password'}
                        />

                        <span
                            onClick={showHidePassword}
                            className='visibilityButton w-[20px]  text-gray-500'
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}



                        </span>
                        
                        <button className=' passbutton w-[450px] bg-black rounded-4xl p-5  text-white text-[20px] hover:bg-gray-800 submitButton'>Continue</button>
                    </div>
                </form>

                {/* <p className='text-[19px] mt-6'> Don't have an account? <span className='text-blue-400'> <Link to="/signUp">Sign up</Link> </span></p> */}
                <br />
                {/* <p className='mb-6'>OR</p> */}


                {/* <div className=' w-[450px]   text-left gap-7 mx-auto' >
          <div className='border-1 border-[gray] text-[19px] rounded-4xl p-5 hoverbottom '><PhoneIcon /> Contineu with phone</div>
          <div className='border-1 border-[gray] text-[19px] rounded-4xl p-5 hoverbottom '><GoogleIcon /> Contineu with Google</div>
          <div className='border-1 border-[gray] text-[19px] rounded-4xl p-5 hoverbottom '><MicrosoftIcon /> Contineu with Microsoft Account</div>
          <div className='border-1 border-[gray] text-[19px] rounded-4xl p-5 hoverbottom '><AppleIcon /> Contineu with Apple</div>
        </div> */}


                <p className='flex justify-center gap-2 termsofuse '>
                    <a href="https://openai.com/en-GB/policies/terms-of-use/"
                        className='termsofuse'>
                        Terms of Use
                    </a>
                    |
                    <a href="https://openai.com/en-GB/policies/privacy-policy/"
                        className='termsofuse'>
                        Privacy Policy
                    </a>
                </p>


            </div>
        </>
    )
}

export default Password

