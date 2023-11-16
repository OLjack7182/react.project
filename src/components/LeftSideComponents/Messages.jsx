import '../../App.css';
import React from 'react';
function Messages(props) {
    const text = React.useRef();
    let addMessage = ()=>{
        props.addMessage();
    }

    let updateNewMessageText = () =>{
        props.updateNewMessageText(text.current.value);
    }
    
    return (
        <div className="Messages">
            {
                props.messagesPage.messages.map((messages)=>(
                    <div className='Messages__text' key={messages.id}>
                        <p>{messages.text}</p>
                    </div>
                ))
            }
            <textarea ref={text} onChange={updateNewMessageText} value={props.messagesPage.newMessageText}/>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
}


export default Messages;