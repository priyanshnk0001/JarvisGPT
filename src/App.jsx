import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './App.css'
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';


function App() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  let submit = (e) => {
    e.preventDefault();
    let emailvalue = e.target.email.value;

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue);

   if(isValid){
    setEmail(emailvalue);
    navigate('/password', {state:{email:emailvalue}});
   } else{
          alert("Please enter a valid email");

   }
    

    console.log(emailvalue)
  }




  return (
    <>
      <div>
        <div className='w-[100%] flex'>
          <h1 className='text-[30px] jarvisGPT '>JarvisGPT</h1>
        </div>

        <div>
          <h1 className='text-[40px] mt-35 welcomeBack '>Welcome back</h1>
        </div>

        <form
          onSubmit={submit}
          className='flex justify-center mt-3  '>
          <div className='flex flex-col gap-3 '>
            <input className='w-[450px] border-1 border-[gray] rounded-4xl p-5  mt-3 '
              placeholder='Email address'
              type="email" name="email" id="emailid" />

            
            <span>

            </span>
            <button className='w-[450px] bg-black rounded-4xl p-5 mt-6 text-white text-[20px] hover:bg-gray-800 submitButton'>Continue</button>
          </div>
        </form>

        <p className='text-[19px] mt-6'> Don't have an account? <span className='text-blue-400'> <Link to="/signUp">Sign up</Link> </span></p>
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

export default App

