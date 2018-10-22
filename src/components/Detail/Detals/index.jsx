import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Divider} from "antd";
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
                <div >
                    <h1 className='page-title_detail'>{data.name}</h1>
                    <img className='cover_image_detail'
                         src={data.image}
                         alt={data.name}
                    />
                    <div className='pre_time_detail'>Prepare time: {data.prepTime}</div>
                    <Divider/>

                    <h2 className='head_detail'>Description</h2>
                    <div className="text_detail">{data.description}</div>
                    <Divider/>
                    <h2 className='head_detail'>Ingredients</h2>
                    <div className="text_detail">
                        {data.ingredients.map(ingredient =>{
                        return <div>{ingredient}</div>})}
                    </div>
                    <Divider/>
                    <h2 className='head_detail'>Method</h2>
                    <div className='step_detail'>
                        <ol >
                            {data.method.map(ingredient =>{
                                return <li ><p className='text_detail'>{ingredient}</p></li>})}
                        </ol>
                    </div>
                    <Divider/>
                    <h2> More Details
                        <a href={data.url} className='text_detail'>
                            Please click the link: How to cook?
                        </a>

                    </h2>




                </div>
            </div>

        )
    }
}

export default Details