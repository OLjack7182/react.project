import '../App.css';
import React, { useEffect, } from 'react';
import PreLoader from '../components/PreLoader'

function Main(props) {
    const newNovostiText = React.useRef();
    
    function addNovosti (){
        fetch('http://localhost:8080/novosti',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.newNovosti),
        })
            .then(response =>{
                if(!response.ok) {
                    throw new Error ('Network error');
                }
                return response.json();
            })
            .then(data =>{
                props.addNovosti()
            })
            .catch(error=>{
                console.error('Error during POST request:', error.message);
            })
        
    }

    let updateNewNovostiText = () =>{
        props.updateNewNovostiText(newNovostiText.current.value);
    }
    return (
        <div className="Main">
            
            <div className="novostiAdd" action='#'>
                <textarea ref={newNovostiText} onChange={updateNewNovostiText} value={props.novostiPage.newNovostiText}/>
                <button onClick={addNovosti} >Отправить</button>
            </div>
            {
                    props.isPreLoad ? <PreLoader/>
                    :(
                        props.novostiPage.novosti.map((novosti)=>(
                            <div className='addNews'>
                                <div className='Main__Wall' key={novosti.id}>
                                    <div className='Main__elements'>
                                        <div className='Main__wall__elements'>
                                            <div className='Main__wall__head'>
                                                <img className='Main__wall__img' alt='img' src={novosti.imgIcon}/>
                                                <div className='Main__groupname'>
                                                    <p>TopRacing Studio</p>
                                                    <p>Сегодня в 10:00</p>
                                                </div>
                                            </div>
                                            <img className='Main__wall__options' alt='img' src='./images/options.png'/>
                                        </div>
                                        <div className='Main__wall__txt' key={novosti.id}>
                                            <p>{novosti.novostiText}</p>
                                        </div>
                                        <img className='Main__photo' src={novosti.novostiImg}/>
                                        <div className='Main__wall__footer'>
                                            <img className='Wall__react' src='./images/like.png'/>
                                            <img className='Wall__react' src='./images/comment.png'/>
                                            <img className='Wall__react' src='./images/repost.png'/>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                )))
            }
        </div>
    );
}
export default Main;