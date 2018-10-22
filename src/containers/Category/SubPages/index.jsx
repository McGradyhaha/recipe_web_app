import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Breadcrumb, Spin} from "antd";
import List from "../../../components/List/index.jsx";
import {getCategory} from "../../../fetch/Search/search";


class CatSubPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data: [],
            size: 0,
            loading: true
        }
        this.resultHandler = this.resultHandler.bind(this);
    }
    render(){
        return (
            <div style={{padding: '30px'}}>
                {
                    this.state.loading
                        ?<div style={{marginLeft: '300', marginTop:'200px'}}>
                            <Spin size="large" tip="Loading Your Recipes..."/></div>
                        :<div>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Category</Breadcrumb.Item>
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
        const result = getCategory(this.props.params.id)
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

export default CatSubPage