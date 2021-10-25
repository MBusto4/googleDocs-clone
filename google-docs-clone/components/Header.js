import React from 'react'

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-lg bg-white'>
            <Button
                color='blue'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='h-20 w-20 border-0'
            >
                <Icon name='menu' size='3xl' />
            </Button>

            <Icon name='description' size='5xl' color='blue' />
            <h1 className='ml-2 text-white text-2xl'>
                Docs
            </h1>

        </div>
    )
}

export default Header
