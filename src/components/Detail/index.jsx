import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Divider} from "antd";


class DetailComponents extends React.Component {
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
                             width='200'
                        />
                    </div>
                    <div className='text_name'>{data.name}</div>

                    <div className='text'>
                        {data.name}
                    </div>
                    <div className='text'>
                        {data.description}
                    </div>
                    <Divider />
                </div>
            </div>

        )
    }
}

export default DetailComponents