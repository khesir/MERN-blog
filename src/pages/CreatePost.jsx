import React, { useState } from 'react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CreatePost = () => {
    const [input, setInput] = useState();
    
    
    return(
        <div className='createPost'>
            <div className="container">
                <div className="action-btns">
                    <div className="left">
                        <input type="text" placeholder='Title'/>
                        <input type="text" placeholder='Author' readOnly value={"Khesir"}/>
                    </div>
                    <div className="right">
                        <button className='btn'>Draft</button>
                        <button className='btn'>Post</button>
                    </div>
                </div>
                <div className="write-post-container">
                     <textarea 
                            autoFocus
                            className="textarea" 
                            placeholder='Content'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                    />
                    <div className='res-content'>
                        <Markdown className="markdown" components={{code:Component}} children={input} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Component = ({value, language}) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={docco}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
};
export default CreatePost;