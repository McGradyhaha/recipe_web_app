import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <div style={{ textAlign: 'center', background: '#fff', marginTop: '300px'}}>
                    Recipeek ©2018 Created by Recipeek Co.
                </div>
                
            </div>
        )
    }
}

export default Footer