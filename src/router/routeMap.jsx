import React from 'react';
import {Router, Route, IndexRoute} from 'react-router'
import App from "../containers/index.jsx";
import Home from "../containers/Home/index.jsx"
import User from "../containers/User/index.jsx"
import Detail from "../containers/Detail/index.jsx"
import NotFound from "../containers/404.jsx"
import Search from '../containers/Search/index.jsx'
import Category from '../containers/Category/index.jsx'
import CatSubpage from '../containers/Category/SubPages/index.jsx'
import Ingredient from '../containers/Ingredient/index.jsx'
import Login from '../containers/Login/index.jsx'
import Register from '../containers/Register/index.jsx'
import Favourite from '../containers/Favourite/index.jsx'


class RouteMap extends React.Component {
    updateHandle() {
        console.log('router changed!')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='User' component={User}/>
                    <Route path='Login' component={Login}/>
                    <Route path='Register' component={Register}/>
                    <Route path='Detail/:id' component={Detail}/>
                    <Route path='Search/:id' component={Search}/>
                    <Route path='Category' component={Category}/>
                    <Route path='Category/:id' component={CatSubpage}/>
                    <Route path='Ingredient' component={Ingredient}/>
                    <Route path='Favourite' component={Favourite}/>
                    <Route path='*' component={NotFound}/>

                </Route>
            </Router>
        )
    }

}

export default RouteMap