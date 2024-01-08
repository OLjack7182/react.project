let withAuthRedirect=(component)=>{
    
    let newComponent = (props) =>{
        let userAuth = localStorage.getItem('user')
        return component
    }
    return newComponent
}

export default withAuthRedirect