import React, { useState, useRef, useEffect } from 'react'
import {EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorDiary : React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const editor = useRef(null) ;

  const updateEditorState = (editorState) => {
    setEditorState(editorState)
  }

  return(
    <div>
        <Editor
          ref={editor}
          editorState={editorState}
          onEditorStateChange={updateEditorState}
        />
      </div>
  )
}

export default EditorDiary;