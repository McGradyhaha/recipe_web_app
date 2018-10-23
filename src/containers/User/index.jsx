import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <h1>User</h1>
                <a href='/#/Favourite' className='text_detail'>
                    Favourite
                </a>
            </div>


        )
    }
}

module.exports = User