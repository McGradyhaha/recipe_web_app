import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Menu, AutoComplete, Icon, Avatar, Input} from 'antd'
import logo from '../../../assets/logo.png'
import './style.css'
import {hashHistory} from "react-router";
import * as suggestion from '../../constants/ingredients'
const Search = Input.Search;

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            ifLogin: true,
            item:'',
            suggest: suggestion.INGREDIENTS
        }
    }


    render(){
        return (
            <div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '100px', textAlign: 'center'}}
                >
                    <img alt='logo'
                         src={logo}
                         width="150"
                         height="40"
                         onClick={this.clickHandler.bind(this, '')}
                         style ={{cursor: 'pointer'}}
                    />
                    <AutoComplete
                        dataSource={this.state.suggest}
                        style={{ width: 200 }}

                        placeholder="input any one ingredient you have"
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    >
                        <Search
                            onSearch={this.searchHandler.bind(this)}
                        />
                    </AutoComplete>
                    {
                        this.props.userinfo.ifLogin
                            ?<Menu.Item key="Login" onClick={this.clickHandler.bind(this, 'Login')}>Login</Menu.Item>
                            :<div className='float-right'>Welcome <a href="#/User">{this.props.userinfo.username}</a>!</div>
                    }
                </Menu>
            </div>
        )
    }

    clickHandler(value) {
        hashHistory.push('/' + value)
    }
    searchHandler(ingredient) {
        console.log('Received values of form: ', ingredient);
        hashHistory.push('/Search/'+ ingredient)
    }


}

export default Header