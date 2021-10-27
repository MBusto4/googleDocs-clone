import React from 'react'
import dynamic from 'next/dynamic'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";

//server side doesnt have access to the window so we do this
const Editor = dynamic(
    () => import('react-draft-wysiwyg')
        .then((module) => module.Editor),
    {
        ssr: false
    }
)

function TextEditor() {
    return (
        <div>
            <Editor />
        </div>
    )
}

export default TextEditor
