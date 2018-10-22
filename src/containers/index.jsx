import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'
import LeftSideBar from '../components/LeftSider/index.jsx'
import RightSideBar from '../components/RightSider/index.jsx'
import {Layout} from 'antd';
import {bindActionCreators} from "redux";
import * as userinfoActions from "../actions/userinfo";
import {connect} from "react-redux";



const {Sider, Content} = Layout
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render(){
        return (
            <div>
                <Layout style={{background: '#fff'}}>
                    <Header userinfo={this.props.userinfo}/>
                    <Layout style={{background: '#fff'}}>
                        <Sider width={300} style={{background: '#fff', padding: 60, position: 'relative'}}>
                            <LeftSideBar/>
                        </Sider>
                        <Content style={{left: 500}}>
                            {this.props.children}
                        </Content>
                        <Sider width={650} style={{background: '#fff', padding: 60, position: 'relative'}}>
                            <RightSideBar/>
                        </Sider>
                    </Layout>
                    <Footer/>
                </Layout>
            </div>
        )
    }

    componentDidMount(){
        this.props.userinfoActions.login({
            ifLogin:true
            })
        this.checkIfLogin()
    }

    checkIfLogin(){
        const userinfo = this.props.userinfo
        if (userinfo.username){
            // already login
            this.props.userinfoActions.login({
                ifLogin:false

            })
        }else{
            // not login
        }
    }
}



function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)