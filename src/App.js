import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Component } from 'react';
import store from './store';
import NavBar from './Components/NavBar/navBar'

class App extends Component {

    render(){
        return (
            <div className="App">
                <Provider store={store}>
                    <NavBar/>
                    <Switch>
                        {/* <Route path="/" exact component={Home}/> */}
                    </Switch>
                </Provider>
            </div>
        );
    };
}

export default App;