import { connect } from "react-redux"
import Header from "./Header"




const HeaderContainer = (props)=>{
    return(
        <Header {...props}/>
    )
}
let mapStateToProps = (state)=>{
    return{
        // EditMode: state.App.mode
    }
}
export default connect(mapStateToProps)(HeaderContainer)