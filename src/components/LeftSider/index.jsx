import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Menu, Input, Icon} from 'antd'
import {hashHistory} from 'react-router'
import logo from '../../../assets/logo.png'

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

// icon lists


class LeftSideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
                <div className='sideMenu'>

                    <Menu
                        style={{width: 256}}
                        mode="vertical"
                        style={{ height: '100%', borderRight:0 }}
                    >
                        <SubMenu key="meal" title={<span><Icon type="smile" /><span>Meal</span></span>}>
                            <Menu.Item key='breakfast' onClick={this.clickHandler.bind(this, 'Breakfast')}>Breakfast and Brunch</Menu.Item>
                            <Menu.Item key='lunch' onClick={this.clickHandler.bind(this, 'Lunch')}>Lunch</Menu.Item>
                            <Menu.Item key='dinner' onClick={this.clickHandler.bind(this, 'Dinner')}>Dinner</Menu.Item>
                            <Menu.Item key='snack' onClick={this.clickHandler.bind(this, 'Snack')}>Snack</Menu.Item>
                            <Menu.Item key='soup' onClick={this.clickHandler.bind(this, 'Soup')}>Soup</Menu.Item>
                            <Menu.Item key='dessert' onClick={this.clickHandler.bind(this, 'Dessert')}>Dessert</Menu.Item>
                        </SubMenu>
                        <SubMenu key="global" title={<span><Icon type="smile" /><span>Global Cuisine</span></span>}>
                            <Menu.Item key='australia' onClick={this.clickHandler.bind(this, 'Australia')}>Australia</Menu.Item>
                            <MenuItemGroup title="Asian">
                                <Menu.Item key="chinese" onClick={this.clickHandler.bind(this, 'Chinese')}>Chinese</Menu.Item>
                                <Menu.Item key="korean" onClick={this.clickHandler.bind(this, 'Korean')}>Korean</Menu.Item>
                                <Menu.Item key="japanese" onClick={this.clickHandler.bind(this, 'Japanese')}>Japanese</Menu.Item>
                            </MenuItemGroup>
                            <Menu.Item key='american' onClick={this.clickHandler.bind(this, 'American')}>American</Menu.Item>
                            <Menu.Item key='italian' onClick={this.clickHandler.bind(this, 'Italian')}>Italian</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
        )
    }
    clickHandler(value) {
        hashHistory.push('/Category/' + value)
    }
}

export default LeftSideBar