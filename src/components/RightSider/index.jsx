import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Menu, Input, Icon, Select, Button} from 'antd'
import {hashHistory} from 'react-router'
import * as suggestion from '../../constants/ingredients'

const Option = Select.Option;

const children = []
const ingredients = []
for (let i = 0; i < suggestion.INGREDIENTS.length; i++) {
    children.push(<Option key={suggestion.INGREDIENTS[i]}>{suggestion.INGREDIENTS[i]}</Option>);
}



class RightSideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            ingredients: ''

        }

    }

    render(){
        return (
            <div className='sideMenu' style={{marginTop: '100px', fontSize: '20px'}}>
                <p>Input Ingredients</p>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Input here"
                    onChange={this.handleChange.bind(this)}
                >
                    {children}
                </Select>
                <Button icon="search" onClick={this.searchHandler.bind(this, this.state.ingredients)}>Search</Button>
            </div>
        )
    }

    handleChange(value) {
        if (value.length ==1) {
            this.state.ingredients=value[0]
        }
        else{
            this.state.ingredients = value.join(',')
            console.log(this.state.ingredients)
            console.log(value)
        }

    }

    searchHandler(ingredient) {
        console.log('Received values of form: ', ingredient);
        hashHistory.push('/Search/'+ this.state.ingredients)
    }
}

export default RightSideBar