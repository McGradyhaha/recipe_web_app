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
                    <p style={{fontSize: '20px'}}>Category</p>
                    <Menu
                        style={{width: 256}}
                        mode="vertical"
                        style={{ height: '100%', borderRight:0 }}
                    >
                        <SubMenu key="meal" title={<span><Icon type="smile" /><span>Meals</span></span>}>
                            <Menu.Item key='breakfast' onClick={this.clickHandler.bind(this, 'Breakfast')}>Breakfast and Brunch</Menu.Item>
                            <Menu.Item key='lunch' onClick={this.clickHandler.bind(this, 'Lunch')}>Lunch</Menu.Item>
                            <Menu.Item key='dinner' onClick={this.clickHandler.bind(this, 'Dinner')}>Dinner</Menu.Item>
                            <Menu.Item key='snack' onClick={this.clickHandler.bind(this, 'Snack')}>Snack</Menu.Item>
                            <Menu.Item key='soup' onClick={this.clickHandler.bind(this, 'Soup')}>Soup</Menu.Item>
                            <Menu.Item key='dessert' onClick={this.clickHandler.bind(this, 'Dessert')}>Dessert</Menu.Item>
                        </SubMenu>
                        <SubMenu key="cuisine" title={<span><Icon type="smile" /><span>Global Cuisine</span></span>}>
                            <Menu.Item key='australia' onClick={this.clickHandler.bind(this, 'Australia')}>Australia</Menu.Item>
                            <MenuItemGroup title="Asian">
                                <Menu.Item key="chinese" onClick={this.clickHandler.bind(this, 'Chinese')}>Chinese</Menu.Item>
                                <Menu.Item key="korean" onClick={this.clickHandler.bind(this, 'Korean')}>Korean</Menu.Item>
                                <Menu.Item key="japanese" onClick={this.clickHandler.bind(this, 'Japanese')}>Japanese</Menu.Item>
                            </MenuItemGroup>
                            <Menu.Item key='american' onClick={this.clickHandler.bind(this, 'American')}>American</Menu.Item>
                            <Menu.Item key='italian' onClick={this.clickHandler.bind(this, 'Italian')}>Italian</Menu.Item>
                        </SubMenu>
                        <SubMenu key="seasons" title={<span><Icon type="smile" /><span>Seasons</span></span>}>
                            <Menu.Item key='spring' onClick={this.clickHandler.bind(this, 'Spring')}>Spring</Menu.Item>
                            <Menu.Item key='summer' onClick={this.clickHandler.bind(this, 'Summer')}>Summer</Menu.Item>
                            <Menu.Item key='autumn' onClick={this.clickHandler.bind(this, 'Autumn')}>Autumn</Menu.Item>
                            <Menu.Item key='winter' onClick={this.clickHandler.bind(this, 'Winter')}>Winter</Menu.Item>
                        </SubMenu>
                        <SubMenu key="event" title={<span><Icon type="smile" /><span>Event</span></span>}>
                            <Menu.Item key='birthday' onClick={this.clickHandler.bind(this, 'Birthday')}>Birthday</Menu.Item>
                            <Menu.Item key='christmas' onClick={this.clickHandler.bind(this, 'Christmas')}>Christmas</Menu.Item>
                            <Menu.Item key='dinner-party' onClick={this.clickHandler.bind(this, 'Dinner-party')}>Dinner Party</Menu.Item>
                            <Menu.Item key='fathers-day' onClick={this.clickHandler.bind(this, 'Fathers-day')}>Fathers Day</Menu.Item>
                            <Menu.Item key='easter' onClick={this.clickHandler.bind(this, 'Easter')}>Easter</Menu.Item>
                            <Menu.Item key='mothers-day' onClick={this.clickHandler.bind(this, 'mothers-day')}>Mothers Day</Menu.Item>
                            <Menu.Item key='picnic' onClick={this.clickHandler.bind(this, 'picnic')}>Picnic</Menu.Item>
                        </SubMenu>
                        <SubMenu key="type" title={<span><Icon type="smile" /><span>Type</span></span>}>
                            <Menu.Item key='free-range' onClick={this.clickHandler.bind(this, 'Free-range')}>Free Range</Menu.Item>
                            <Menu.Item key='gluten-free' onClick={this.clickHandler.bind(this, 'Gluten-free')}>Gluten Free</Menu.Item>
                            <Menu.Item key='vegan-based' onClick={this.clickHandler.bind(this, 'Vegan-based')}>Vegan Based</Menu.Item>
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