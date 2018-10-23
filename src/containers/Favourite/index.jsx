import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SwiperPic from '../../components/SwiperPic/index.jsx'
import {Spin, Carousel, Button, Icon, Breadcrumb, Menu} from 'antd'
import {hashHistory} from "react-router";
import {getSearchResult} from "../../fetch/Search/search.js";
import List from '../../components/List/index.jsx'
import {getCategory} from "../../fetch/Search/search";
import {getFavourite} from '../../fetch/User/favourite.js'

class Favourite extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data: [],
            size: 0,
            loading: true
        }
    }


    render(){
        return (
            <div>
                {
                    this.state.loading
                        ?<div style={{marginLeft: '300', marginTop:'200px'}}>
                            <Spin size="large" tip="Loading Your Favourites..."/></div>
                        :<div>
                            <div style={{padding: '30px', fontSize:'25px', fontWeight:'700'}}>Your favourites:</div>
                            <List data={this.state.data}/></div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadData()

    }

    componentWillReceiveProps(newProps){
        const that = this;
        that.setState({
            loading:true
        })
        console.log({newProps})
        this.loadData();
    }

    // loading search result
    loadData(){
        const result = getFavourite()
        this.resultHandler(result)

    }

    // split result to data and size
    resultHandler(result){
        const that = this;
        result.then(res =>{
            return res.json()
        }).then(json =>{
            console.log(json)
            const size = json.size
            const data = json.result
            console.log(that);
            that.setState({
                size: size,
                data,
                loading: false
            })
        })
    }


}

export default Favourite