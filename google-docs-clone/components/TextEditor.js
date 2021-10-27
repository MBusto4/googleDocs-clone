import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from 'draft-js';
import { db } from '../firebase';
import { useSession } from 'next-auth/react'
import { useRouter } from "next/dist/client/router"

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
        </div>
    )
}

export default TextEditor
