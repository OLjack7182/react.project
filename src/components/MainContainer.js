import '../App.css';
import Main from './Main';
import { setNovosti , addNovosti , updateNewNovostiText , toglePreLoad  } from '../redux/MainReducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

let MainContainer = (props)=>{
    const navigate = useNavigate();
    useEffect (() =>{
        props.toglePreLoad(true)
        fetch('http://localhost:8080/novosti')
            .then(response =>{
                if (!response.ok){
                    throw new Error('Ошибка сети');
                }
                return response.json();
            })
            .then(data=>{
                props.setRoom(data);
                props.toglePreLoad(false)
            })
        .catch(error=>{
            console.error('Ошибка при получении данных:', error.message)
        });},[])

        let authUser = JSON.parse(localStorage.getItem("user"));
        if(!authUser){
            navigate("/login")
            return null
        }
    return <Main {...props}/>
}


let mapStateToProps = (state)=>{
    return{
        
        novostiPage: state.novostiPage,
        newNovosti:{
            id: state.novostiPage.novosti.length + 1,
            imgIcon: "https://images.app.goo.gl/VZ42xvEpGppr1atQ6",
            time: "Сегодня в 10:00",
            novostiText: state.novostiPage.newNovostiText,
            novostiImg: "https://ss.sport-express.ru/userfiles/materials/188/1880992/large.jpg"
        },
        isPreLoad: state.novostiPage.isPreLoad,
    }
    
}



export default connect(mapStateToProps, { addNovosti, updateNewNovostiText, toglePreLoad, setNovosti })(MainContainer);