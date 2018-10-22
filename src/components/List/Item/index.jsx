import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from "react-router";
import { Divider } from 'antd';
import './style.css'


class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }

    render(){
        const data = this.props.data

        return (
            <div className="list-item clear-fix">
                <div >
                    <div className='image'>
                        <img src={data.image}
                             alt={data.name}
                             onClick={this.clickHandler.bind(this, data._id)}
                             width='200'
                        />
                    </div>
                    <div className='text_name'>{data.name}</div>

                    <div className='text'>
                        {data.cookTime}
                    </div>
                    <Divider />
                </div>
            </div>


        )
    }

    clickHandler(id) {
        hashHistory.push('/Detail/' + id)
    }






}

export default Item