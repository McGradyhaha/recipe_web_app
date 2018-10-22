import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Divider} from "antd";
import Details from '../Detail/Detals/index.jsx'


class DetailComponents extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        const data = this.props.data
        return (
            <div style={{padding: 60, position: 'relative'}}>
                {data.map((item, index) =>{
                    return <Details key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default DetailComponents