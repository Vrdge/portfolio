import { connect } from "react-redux"
import { get_screen_size } from "../../redux/Reducers/HeaderReducer"
import Header from "./Header"





const HeaderContainer = (props)=>{
    return(
        <Header {...props}/>
    )
}

export default HeaderContainer