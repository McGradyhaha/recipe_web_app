import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Details from "../Detail/Details";


class DetailComponents extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }
    render(){
        const data = this.props.data

        return (
            <div>
                <div>
                    {data.map((item, index) =>{
                        return <Details key={index} data={item}/>
                    })}
                </div>
            </div>
        )
    }


}

export default DetailComponents