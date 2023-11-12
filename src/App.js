import './App.css';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/Store-redux';
import HeaderContainer from './Components/Header/HeaderContainer';
import HeaderInner from './Components/Header/HeaderInner/HeaderInner';
import { useState } from 'react';

const App = (props) => {
  const [EditMode, setEditMode] = useState(true)

  if (props.initialized) return (
    <div className="App">
      <header>
        <HeaderInner EditMode={EditMode} setEditMode={setEditMode} />
        <HeaderContainer EditMode={EditMode} setEditMode={setEditMode} />
      </header>
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

