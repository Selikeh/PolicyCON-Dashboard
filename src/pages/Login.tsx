import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LuTextCursor } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("abc@xyz.com");
    const [password,setPassword] = useState("selikeh001");
    const [showEmail, setShowEmail] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    function onEmailButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
        e.preventDefault();
        setShowEmail(prev=>!prev);
    }
    function onPasswordButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
        e.preventDefault();
        setShowPassword(prev=>!prev);
    }
    function onSignInButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
        e.preventDefault();
        if(email === "abc@xyz.com" && password === "selikeh001"){
            navigate("/Dashboard")
        }
    }



  return (
    <div className=' bg-[url("../../public/bg-01.jpg")]   bg-center bg-cover w-screen h-[100dvh] relative z-10 flex justify-center items-center content-center before:content-[""] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-cyan-500 before:to-fuchsia-500 before:opacity-75 before:z-[-5]'>
        <div className=' bg-gray-100 w-1/4 pt-20 min-w-fit h-[90%] rounded-md flex flex-col items-center shadow-[0px_15px_60px_20px] shadow-[#61616175]'>
            <form className='  px-6 h-fit py-2 flex flex-col items-center'>
                <h1 className=' mb-6 text-center text-2xl font-extrabold'>Sign In</h1>
                <div className=' w-fit mb-4 p-2 border bg-slate-100 rounded-xl flex flex-row justify-center shadow-[0px_15px_30px_20px] shadow-[#b6b6b657]'>
                    <input className=' bg-slate-100 outline-none' type={showEmail?"text":"password"} placeholder='username or email' value={email} onChange={e=>setEmail(e.currentTarget.value)}/> <button onClick={onEmailButtonClick} className=' bg-slate-300 rounded flex flex-row justify-center items-center'><HiDotsHorizontal className=" text-slate-100" /><LuTextCursor className=" text-slate-100" size="10px"/></button>
                </div>
                <div className=' w-fit p-2 border bg-slate-100 rounded-xl flex flex-row justify-center shadow-[0px_15px_30px_20px] shadow-[#b6b6b657]'>
                    <input className=' bg-slate-100 outline-none' type={showPassword?"text":"password"} placeholder='password' value={password} onChange={e=>setPassword(e.currentTarget.value)}/> <button onClick={onPasswordButtonClick} className=' bg-slate-300 rounded flex flex-row justify-center items-center'><HiDotsHorizontal className=" text-slate-100" /><LuTextCursor className=" text-slate-100" size="10px"/></button>
                </div>
                <button onClick={onSignInButtonClick} className=' my-5 py-3 px-12 rounded-3xl bg-fuchsia-600 text-slate-50 text-xs font-semibold shadow-[0px_15px_30px_3px] shadow-fuchsia-600/[0.4]'>SIGN IN</button>
            </form>
            <div className=' py-3 flex-grow flex flex-col justify-between'>
                <div className=' text-slate-400 text-xs font-medium'>Or login with</div>
                <div className=' flex justify-center gap-2'>
                    <div className=' p-2 bg-slate-100 rounded-3xl flex flex-row justify-center shadow-[0px_15px_30px_20px] shadow-[#b6b6b657] hover:cursor-pointer'><img className=' w-5 h-5' src="../../public/facebook_logo.png" alt="" /></div>
                    <div className=' p-2 bg-slate-100 rounded-3xl flex flex-row justify-center shadow-[0px_15px_30px_20px] shadow-[#b6b6b657] hover:cursor-pointer'><img className=' w-5 h-5' src="../../public/google_brand_branding_logo_network_icon.png" alt="" /></div>
                </div>
                <div className=' mt-[6vh] text-center text-slate-500 text-xs font-medium hover:cursor-pointer'>Sign Up</div>
            </div>
        </div>
    </div>
  )
}

export default Login