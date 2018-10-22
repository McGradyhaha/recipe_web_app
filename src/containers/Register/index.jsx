import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../Login/styles.css'
import {hashHistory} from "react-router";
import {bindActionCreators} from "redux";
import * as userinfoActions from "../../actions/userinfo";
import connect from "react-redux/es/connect/connect";

const FormItem = Form.Item;
const supStyle = {
    fontSize: '20px',

    fontWeight: 'bold'
}

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: '',
            password: '',
            lastName:'',
            firstName:''
        }
    }

    // login
    submitHandler(){
        const username = this.state.username
        const fn = this.state.firstName

        console.log('Received values of form: ', username);
        console.log('Received values of form: ', fn);

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

    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }

    render(){
        return (
            <div >
                {
                    <div style={{marginLeft: '500px', marginTop: '100px'}}>
                        <Form className="login-form">
                            <FormItem>
                                <span style ={supStyle}>Register</span>
                            </FormItem>
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
                                <Input
                                    placeholder="Enter your last name"
                                    value={this.state.lastName}
                                    onChange = {this.onChangeLastName.bind(this)}/>
                            </FormItem>
                            <FormItem>
                                <Input
                                    placeholder="Enter your first name"
                                    value={this.state.firstName}
                                    onChange = {this.onChangeFirstName.bind(this)}/>
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    onClick={this.submitHandler.bind(this)}
                                >

                                    Register
                                </Button>

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
)(Register)