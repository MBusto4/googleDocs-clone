import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useSession, signOut, getSession } from 'next-auth/react'
import {
    useDocumentOnce
} from "react-firebase-hooks/firestore"
import { db } from '../../firebase'
import { useRouter } from "next/dist/client/router"
import TextEditor from '../../components/TextEditor'

function Doc() {
    const { data: sessionData } = useSession()
    const router = useRouter()
    const { id } = router.query

    const [snapshot, loading] = useDocumentOnce(db.collection('userDocs')
        .doc(sessionData?.user?.email)
        .collection('docs')
        .doc(id))


    // if (!loading && !snapshot?.data()?.fileName) {
    //     router.replace('/')
    // }

    return (
        <div>
            <header className='flex justify-between items-center p-3 pb-1'>
                <span className='cursor-pointer' onClick={() => router.push('/')}>
                    <Icon name='description' size='5xl' color='blue' />
                </span>

                <div className='flex-grow px-2'>
                    <h2 className='font-bold'>
                        {snapshot?.data()?.fileName}
                    </h2>
                    <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
                        <p className='option'>File</p>
                        <p className='option'>Edit</p>
                        <p className='option'>View</p>
                        <p className='option'>Insert</p>
                        <p className='option'>Format</p>
                        <p className='option'>Tools</p>
                    </div>
                </div>
                <Button
                    color='lightBlue'
                    buttonType='filled'
                    size='regular'
                    className='h-10'
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple='light'
                >
                    <Icon name='people' size='md' /> SHARE
                </Button>
                <img
                    loading='lazy'
                    className='h-10 w-10 rounded-full ml-2'
                    src={sessionData?.user?.image} alt="" />
            </header>
            <TextEditor />
        </div>
    )
}

export default Doc
