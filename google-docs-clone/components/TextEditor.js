import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { db } from '../firebase';
import { useSession } from 'next-auth/react'
import { useRouter } from "next/dist/client/router"
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import {
    useDocumentOnce
} from "react-firebase-hooks/firestore"
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";



//server side doesnt have access to the window so we do this
const Editor = dynamic(
    () => import('react-draft-wysiwyg')
        .then((module) => module.Editor),
    {
        ssr: false
    }
)

function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const { data: sessionData } = useSession()
    const router = useRouter()
    const { id } = router.query

    const [snapshot, loading] = useDocumentOnce(
        db.collection('userDocs')
            .doc(sessionData?.user?.email)
            .collection('docs')
            .doc(id))

    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            );
        }
    }, [snapshot]);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)

        db.collection('userDocs')
            .doc(sessionData.user.email)
            .collection('docs')
            .doc(id).set({
                //converting to a storable json 
                editorState: convertToRaw(editorState.getCurrentContent())
            },
                {
                    merge: true
                }
            )
    }

    return (
        <div className=' bg-[#F8F9FA] min-h-screen pb-16'>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
                editorClassName='mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10'

            />
            <div className='flex h-screen'>
                <div className='mx-auto'>
                    <Button
                        onClick={() => router.push('/')}
                        color='lightBlue'
                        buttonType='filled'
                        size='regular'
                        className='h-10'
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple='light'
                    >
                        <Icon name='home' size='md' /> SAVE AND GO BACK HOME
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TextEditor
