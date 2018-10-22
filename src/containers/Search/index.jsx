import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SwiperPic from '../../components/SwiperPic/index.jsx'
import {Spin, Carousel, Button, Icon, Breadcrumb, Menu} from 'antd'
import {hashHistory} from "react-router";
import {getSearchResult} from "../../fetch/Search/search.js";
import List from '../../components/List/index.jsx'


class Search extends React.Component {
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
                        ?<div style={{marginLeft: '550px', marginTop:'300px'}}>
                            <Spin size="large" tip="Loading Your Recipes..."/></div>
                        :<div>
                            <div style={{padding: '30px'}}>Search Result: {this.props.params.id}</div>
                            <List data={this.state.data}/></div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.loadData()

    }

    shouldComponentUpdate(){
        this.loadData()
    }

    // loading search result
    loadData(){
        const result = getSearchResult(this.props.params.id)
        this.resultHandler(result)


    }

    // split result to data and size
    resultHandler(result){
        result.then(res =>{
            return res.json()
        }).then(json =>{
            console.log(json)
            const size = json.size
            const data = json.result

            this.setState({
                size: size,
                data: this.state.data.concat(data),
                loading: false
            })
        })
    }


}

export default Search