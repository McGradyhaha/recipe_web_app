import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Breadcrumb, Spin} from "antd";
import List from "../../../components/List/index.jsx";
import {getCategory} from "../../../fetch/Search/search";


class CatSubPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
            <div style={{padding: '30px'}}>
                {
                    this.state.loading
                        ?<div style={{marginLeft: '550px', marginTop:'300px'}}>
                            <Spin size="large" tip="Loading Your Recipes..."/></div>
                        :<div>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                                <Breadcrumb.Item href='#/Category'>Category</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.props.params.id}</Breadcrumb.Item>

                            </Breadcrumb>
                            <List data={this.state.data}/></div>
                }


            </div>
        )
    }

    componentDidMount(){
        this.loadData()

    }

    // loading search result
    loadData(){
        const result = getCategory(this.props.params.id)
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

export default CatSubPage