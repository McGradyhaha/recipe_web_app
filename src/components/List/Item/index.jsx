import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from "react-router";
import { Divider, Rate} from 'antd';
import './style.css'


class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }

    render(){
        const data = this.props.data
        const value = parseInt(data.rating)
        return (
            <div className="list-item clear-fix">
                <div >
                    <div className='image'>
                        <img src={data.image}
                             alt={data.name}
                             onClick={this.clickHandler.bind(this, data._id.$oid)}
                             width='200'
                        />
                    </div>

                    <a href={'#/Detail/'+ data._id.$oid} className='text_name'>
                        {data.name}
                    </a>
                    <div>
                        <Rate  value={value} disabled/>
                    </div>
                    <div className='text'>
                        pt: {data.cookTime}
                    </div>
                    <div className='text'>
                        {data.description}
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