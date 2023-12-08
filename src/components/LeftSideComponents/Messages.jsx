import '../../App.css';
import React from 'react';

function Messages(props) {
    if(props.messagesPage.messages.length ===0){
        fetch('https://65686da29927836bd974cb01.mockapi.io/knewit/messages/messages')
    .then(response =>{
        if (!response.ok){
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data=>{
        props.setMessages(data);
    })
    .catch(error=>{
        console.error('Ошибка при получении данных:', error.message)
    });
    }
    
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