import './Preloader.css'

let PreLoader = ()=>{
    return(
        <div className='preloaderMain'>
            <div className="rocketLoader">
                <div className="rocket">
                    <div className="rocketExtras"></div>
                        <div className="jet"><span></span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader;