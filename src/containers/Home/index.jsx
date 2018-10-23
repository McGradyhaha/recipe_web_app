import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as sample from '../../constants/carousel.js'
import SwiperPic from '../../components/SwiperPic/index.jsx'
import {Carousel, Button, Icon} from 'antd'
import {hashHistory} from "react-router";




const divStyle = {
    width: '800px',
    height: '400px',
    cursor: 'pointer'

}
const divStyle_1 = {
    width: '390px',
    height: '200px',
    cursor: 'pointer'

}
const supStyle = {
    fontSize: '20px',

    fontWeight: 'bold'
}

const supStyle1 = {
    fontSize: '30px',

    fontWeight: 'bold'
}


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (

            <div style={{padding:60}}>
                <span style ={supStyle1}>Today Top 3</span>
                <div style={divStyle}>
                    <Carousel
                        autoplay
                        vertical
                        >
                        {
                            ( sample.top3 || [ ]).map((item,index)=>{
                                const imgUrl=item.imgUrl;
                                return(
                                    <div>
                                        <img src={imgUrl} alt={index} style={divStyle} onClick={this.clickHandlerDetail.bind(this, item.id)}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div style={{marginTop: '20px', float: 'left', display: 'inline'}}>
                    <span style ={supStyle}>Popular Recipes</span>
                    <Button shape="circle" icon="search" onClick={this.clickHandler.bind(this, 'popular')}/>
                    <div style={divStyle_1}>
                        <Carousel
                            autoplay
                        >
                            {
                                ( sample.popular || [ ]).map((item,index)=>{
                                    const imgUrl=item.imgUrl;
                                    return(
                                        <div>
                                            <img src={imgUrl} alt={index} style={divStyle_1} onClick={this.clickHandlerDetail.bind(this, item.id)}/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div style={{marginTop: '20px', float:'left', marginLeft: '20px', display: 'inline'}}>
                    <span style ={supStyle}>Newest Recipes</span>
                    <Button shape="circle" icon="search" onClick={this.clickHandler.bind(this, 'newest')}/>
                    <div style={divStyle_1}>
                        <Carousel
                            autoplay
                        >
                            {
                                ( sample.newest || [ ]).map((item,index)=>{
                                    const imgUrl=item.imgUrl;
                                    return(
                                        <div>
                                            <img src={imgUrl} alt={index} style={divStyle_1} onClick={this.clickHandlerDetail.bind(this, item.id)}/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>

        )
    }
    clickHandler(value) {
        hashHistory.push('/Category/' + value)
    }
    clickHandlerDetail(value){
        hashHistory.push('/Detail/' + value)
    }
}

export default Home