import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Breadcrumb} from "antd";


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div style={{padding: '30px'}}>
                category

            </div>
        )
    }
}

export default Category