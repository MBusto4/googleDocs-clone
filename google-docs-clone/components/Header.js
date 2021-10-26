import React from 'react'

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router"
import { signIn, signOut, useSession } from 'next-auth/react'

import {
    HomeIcon,
} from "@heroicons/react/outline"

function Header() {
    const router = useRouter()

    const { data: sessionData } = useSession()



    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-lg bg-[#0d0224] border-b-2 border-[#D62AD0]'>
            <Button

                color='purple'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='h-20 w-20 border-0'
            >
                <Icon name='menu' size='3xl' />
            </Button>

            <Icon name='description' size='5xl' color='purple' />
            <h1 onClick={() => router.push('/auth/signin')} className=' cursor-pointer ml-2 text-white text-2xl mx-5 md:mx-20 font-bold'>
                Docs
            </h1>

            <div className='flex flex-grow items-center px-5 py-2 text-white rounded-3xl border-2 border-[#D62AD0] focus-within::text-white focus-within:shadow-md'>
                <Icon name='search' size='3xl' color='purple' />
                <input type='text' placeholder='Search' className='flex-grow px-5 text-base bg-transparent outline-none' />
            </div>

            {sessionData ? (
                <>
                    <Button
                        color='gray'
                        buttonType='outline'
                        rounded={true}
                        iconOnly={true}
                        ripple='dark'
                        className='ml-5 md:ml-20 h-20 w-20 border-0'
                    >
                        <Icon className='cursor-pointer' name='apps' size='3xl' color='purple' />
                    </Button>
                    <img
                        onClick={signOut}
                        loading='lazy'
                        // onClick ={signOut}
                        className='cursor-pointer h-12 w-12 rounded-full ml-2'
                        src={sessionData?.user?.image} alt="" />
                </>
            ) : (
                <button className="text-[#D62AD0] font-semibold ml-5" onClick={signIn}> Sign In </button>
            )}
        </header >
    )
}

export default Header
