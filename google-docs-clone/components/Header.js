import React from 'react'

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-lg bg-gray-900'>
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
            <h1 className='ml-2 text-white text-2xl mx-5'>
                Docs
            </h1>

            <div className='flex flex-grow items-center px-5 py-2 text-white rounded-3xl border-2'>
                <Icon name='search' size='3xl' color='purple' />
                <input type='text' placeholder='Search' className='flex-grow px-5 text-base bg-transparent outline-none' />
            </div>

        </div >
    )
}

export default Header
