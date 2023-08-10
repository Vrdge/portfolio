import './App.css';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store-redux';
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {
  if(props.initialized)return (
    <div className="App">
      <HeaderContainer/>
    </div>
  );

}

let mapStateToProps = (state) => {

  return {
    initialized: state.App.initialized
  }
}

export const AppContainer = compose(connect(mapStateToProps))(App);

export const MainApp = () => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>

  
}

