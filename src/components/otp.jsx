import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


// import './App.css'
// import PhoneIcon from '@mui/icons-material/Phone';
// import GoogleIcon from '@mui/icons-material/Google';
// import MicrosoftIcon from '@mui/icons-material/Microsoft';
// import AppleIcon from '@mui/icons-material/Apple';



function Otp() {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email








  const submit = (e) => {
    event.preventDefault()
    let otpvalue = event.target.otp.value


    if (otpvalue == '1234') {
      setOtp(otpvalue);
      navigate('/home', {state:{ otp:otpvalue }})

    } else {
      alert("Please enter a valid OTP");
    }
    console.log(otpvalue)
  }


return (
  <div>
    <div className='w-[100%] flex'>
      <h1 className='text-[30px] jarvisGPT '>JarvisGPT</h1>
    </div>

    <div>
      <h1 className='text-[40px]'>Check your inbox</h1>
      <h1 className='text-[18px] '>Enter the verification code we just sent to 
        <br />
        <span>
          {email}
        </span>
      </h1>
    </div>

    <form
      onSubmit={submit}
      className='flex justify-center mt-3  '>
      <div className='flex flex-col gap-3 '>
        <input className='w-[450px] border-1 border-[gray] rounded-4xl p-5  mt-3 '
          placeholder='Code'
          type="text , required" name="otp" id="otp" />

        <button
          type='submit'
          className='w-[450px] bg-black rounded-4xl p-5 mt-6 text-white text-[20px] hover:bg-gray-800 submitButton'>Contineu</button>
      </div>
    </form>

    <p className='text-[19px] mt-6'> Resend email</p>
    <br />
    <p className='flex justify-center gap-2  '>
      <a href="https://openai.com/en-GB/policies/terms-of-use/"
        className=''>
        Terms of Use
      </a>
      |
      <a href="https://openai.com/en-GB/policies/privacy-policy/"
        className=''>
        Privacy Policy
      </a>
    </p>

  </div>
)
}


export default Otp
