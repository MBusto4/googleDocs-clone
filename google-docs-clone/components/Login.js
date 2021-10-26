import React from 'react'
// import { signIn } from "next-auth/client"
import Button from "@material-tailwind/react/Button";


function Login() {

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <img className='h-300 max-w-xl object-contain' src="https://tettra.com/wp-content/uploads/2019/03/integrations-google-docs-logo.png" alt="" />
            <Button
                className='w-44 mt-10'
                color='blue'
                buttonType='filled'
                ripple='light'
            // onClick={signIn}
            >Login</Button>
        </div>

    )
}
export default Login
