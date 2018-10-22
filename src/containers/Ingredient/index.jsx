import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SwiperPic from '../../components/SwiperPic/index.jsx'
import {Carousel, Button, Icon, Breadcrumb, Menu} from 'antd'
import {hashHistory} from "react-router";



class Ingredient extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div style={{padding: '30px'}}>
               Ingredients

            </div>
        )
    }

}

export default Ingredient