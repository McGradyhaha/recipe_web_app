import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Divider, Icon, Rate} from "antd";
import './style.css'
import {postFavourite} from "../../../fetch/User/favourite.js";
import {hashHistory} from "react-router";
import Disqus from 'disqus-react';

class Details extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {

        }
    }

    submitHandler(id){
        const dict = {
            recipe_id: id
        };
        console.log("dict is ", JSON.stringify(dict))

        const result = postFavourite(dict)
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
            if(json.success == true){
                hashHistory.push('/Favourite')
            }
            else{
                hashHistory.push('/Login')
            }

        })

    }


    render(){
        const data = this.props.data
        const value = parseInt(data.rating)
        const disqusShortname = "haha"
        const disqusConfig = {
            identifier: data._id.$oid,
            title: data.name,
        };
        return (

            <div className="list-item clear-fix">
                <div >
                    <h1 className='page-title_detail'>{data.name}</h1>

                    <img className='cover_image_detail'
                         src={data.image}
                         alt={data.name}
                         // style={{display:'inline'}}
                    />


                    <div className='pre_time_detail'>Prepare time: {data.prepTime}</div>
                    <div>
                        <Rate  value={value}/>
                    </div>


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

                    <p style={{marginLeft:'600px', display:'inline'}}>
                        If you like, please hit me   </p>
                    <Icon type="heart"
                          theme="twoTone"
                          twoToneColor="#eb2f96"
                          style={{ display:'inline', cursor: 'pointer'}}
                          onClick={this.submitHandler.bind(this, data._id.$oid)}
                          />


                    <Divider/>

                    <h2> More Details
                        <a href={data.url} className='text_detail' target='_blank'>
                            Please click the link: How to cook?
                        </a>

                    </h2>
                    <Divider/>
                    <div className="article">

                        <Disqus.CommentCount  config={disqusConfig} shortname={disqusShortname}>
                            Comments
                        </Disqus.CommentCount>
                        <Disqus.DiscussionEmbed  config={disqusConfig} shortname={disqusShortname}/>

                    </div>




                </div>
            </div>

        )
    }
}

export default Details