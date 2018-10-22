import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.css'
import {hashHistory} from "react-router";
import {bindActionCreators} from "redux";
import * as userinfoActions from "../../actions/userinfo";
import connect from "react-redux/es/connect/connect";
import {postLogin} from "../../fetch/User/Login/login.js";

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    // login
    submitHandler(){
        const username = this.state.username
        const result=postLogin({username})
        this.props.userinfoActions.login({
            username: username

        })
        console.log('Received values of form: ', username);
        hashHistory.push('')


    }

    // change username in input
    onChangeUserName(e){
        this.setState({
            username: e.target.value

        })
    }

    // change password in input
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div >
                {
                    <div style={{marginLeft: '500px', marginTop: '200px'}}>
                        <Form className="login-form">
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Enter your Username"
                                    value={this.state.username}
                                    onChange = {this.onChangeUserName.bind(this)}/>
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Enter your Password"
                                    value={this.state.password}
                                    onChange = {this.onChangePassword.bind(this)}/>
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    onClick={this.submitHandler.bind(this)}
                                >

                                    Log inn
                                </Button>
                                Or <a href="#/Register">register now!</a>
                            </FormItem>

                        </Form>
                    </div>
                }
            </div>
        )
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
)(Login)
