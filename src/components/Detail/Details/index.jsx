import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from "react-router";
import './style.css'

class Details extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    }
    render(){
        const data = this.props.data

        return (
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">

                    {data.ingredients.split("\n").map(ingredient =>{
                        return <div>{ingredient}</div>
                    })}
                </div>

            </div>
        )
    }



}

export default Details