import '../App.css';
import React from 'react';
import PageNews from './PageNews';

function Main() {

    return (
        <div className="Main">
                <div className='Main__Wall'>
                    <div className='Main__wall'>
                        <div className='Main__elements'>
                            <div className='Main__wall__elements'>
                                <div className='Main__wall__head'>
                                    <img className='Main__wall__img' src='./images/race.jpg'/>
                                    <div className='Main__groupname'>
                                        <p>TopRacing Studio</p>
                                        <p>Сегодня в 10:00</p>
                                    </div>
                                </div>
                                <img className='Main__wall__options' src='./images/options.png'/>
                            </div>
                            <div className='Main__wall__txt'>
                                <p>Итальянское подразделения Motorsport сообщает, что появляется всё больше фактов об ультиматуме для Серхио Переса. Если он не проявит себя за оставшиеся гонки сезона, то его заменит, скорее всего, Даниэль Риккардо.</p>
                            </div>
                            <img className='Main__photo' src='./images/wallphoto.jpg'/>
                            <div className='Main__wall__footer'>
                                <img className='Wall__react' src='./images/like.png'/>
                                <img className='Wall__react' src='./images/comment.png'/>
                                <img className='Wall__react' src='./images/repost.png'/>
                            </div>
                        </div>
                        <div className='Main__elements'>
                            <div className='Main__wall__elements'>
                                <div className='Main__wall__head'>
                                    <img className='Main__wall__img' src='./images/stanislavskiy.png'/>
                                    <div className='Main__groupname'>
                                        <p>Stanislavskiy</p>
                                        <p>Вчера в 23:30</p>
                                    </div>
                                </div>
                                <img className='Main__wall__options' src='./images/options.png'/>
                            </div>
                            <div className='Main__wall__txt'>
                                <p>Ред Булл окрыляет!<br></br>
Они кстати сделали специальную ливрею для предстоящего этапа в США.</p>
                            </div>
                            <img className='Main__photo' src='./images/wallphoto2.jpg'/>
                            <div className='Main__wall__footer'>
                                <img className='Wall__react' src='./images/like.png'/>
                                <img className='Wall__react' src='./images/comment.png'/>
                                <img className='Wall__react' src='./images/repost.png'/>
                            </div>
                        </div>
                        <div className='Main__elements'>
                            <div className='Main__wall__elements'>
                                <div className='Main__wall__head'>
                                    <img className='Main__wall__img' src='./images/GasnutOgni.jpg'/>
                                    <div className='Main__groupname'>
                                        <p>Гаснут огни</p>
                                        <p>22 окт в 14:00</p>
                                    </div>
                                </div>
                                <img className='Main__wall__options' src='./images/options.png'/>
                            </div>
                            <div className='Main__wall__txt'>
                                <p>В десять вечера по Москве стартует Гран-При Формулы-1 в Остине!</p>
                            </div>
                            <img className='Main__photo' src='./images/Wallphoto3.jpg'/>
                            <div className='Main__wall__footer'>
                                <img className='Wall__react' src='./images/like.png'/>
                                <img className='Wall__react' src='./images/comment.png'/>
                                <img className='Wall__react' src='./images/repost.png'/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Main;
