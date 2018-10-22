import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Spin} from "antd";
import {getDetails} from "../../fetch/Search/search.js";

import DetailComponents from '../../components/Detail/index.jsx'
import List from '../../components/List/index.jsx'


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data: [],
            loading: true,
            length: 0
        }
    }
    render(){
        return (
            this.state.loading
                ?<div style={{marginLeft: '550px', marginTop:'300px'}}>
                    <Spin size="large" tip="Loading Your Details..."/>
                </div>
                :<div>
                    <DetailComponents data={this.state.data}/>
                </div>
        )
    }

    componentDidMount(){
        this.loadData()

    }

    // loading search result
    loadData(){
        const result = getDetails(this.props.params.id)
        this.resultHandler(result)

    }

    // split result to data and size
    resultHandler(result){
        result.then(res =>{
            return res.json()
        }).then(json =>{
            console.log(json)
            const data = json.result
            const length =json.length

            this.setState({
                data: data,
                loading: false,
                length:length
            })
        })
    }

}

export default Detail