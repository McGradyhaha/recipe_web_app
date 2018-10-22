import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SwiperPic from '../../components/SwiperPic/index.jsx'
import {Carousel, Button, Icon} from 'antd'
import {hashHistory} from "react-router";


const list=[{
    imgUrl:"http://wdlj.zoomdong.xin/neuq-gxg.png",
    content:"2018年中国大学生程序设计竞赛欢迎你"
},{
    imgUrl:"http://wdlj.zoomdong.xin/neuq-zhl.png",
    content:"相逢的人会再相逢"
},{
    imgUrl:"http://wdlj.zoomdong.xin/neuq-zlp.png",
    content:"小岛美景等候多时"
},{ imgUrl:"http://wdlj.zoomdong.xin/neuq-gxg.png",
    content:"2018年中国大学生程序设计竞赛欢迎你"
}]


const divStyle = {
    width: '800px',
    height: '400px'
}
const divStyle_1 = {
    width: '390px',
    height: '200px'
}
const supStyle = {
    fontSize: '20px',

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
                <div style={divStyle}>
                    <Carousel
                        autoplay
                        vertical
                        >
                        {
                            ( list || [ ]).map((item,index)=>{
                                const imgUrl=item.imgUrl;
                                return(
                                    <div>
                                        <img src={imgUrl} alt={index} style={divStyle} onClick={this.clickHandlerDetail.bind(this, 'haha')}/>
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
                            effect="fade"
                        >
                            {
                                ( list || [ ]).map((item,index)=>{
                                    const imgUrl=item.imgUrl;
                                    return(
                                        <div>
                                            <img src={imgUrl} alt={index} style={divStyle_1}/>
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
                            effect="fade"
                        >
                            {
                                ( list || [ ]).map((item,index)=>{
                                    const imgUrl=item.imgUrl;
                                    return(
                                        <div>
                                            <img src={imgUrl} alt={index} style={divStyle_1}/>
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