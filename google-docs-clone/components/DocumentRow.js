import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from "next/dist/client/router"

function DocumentRow({ id, date, fileName }) {
    const router = useRouter()

    return (
        <div className='flex items-center p-4 rounded-lg hover:bg-[#D62AD0] text-sm cursor-pointer'>
            <Icon
                name='article' size='3xl' color='white'
            />
            <p className='text-white flex-grow pl-5 w-10 pr-10 truncate'>{fileName}</p>
            <p className='text-white pr-5 text-sm'>{date?.toDate().toLocaleDateString()}</p>
        </div>
    )
}

export default DocumentRow
