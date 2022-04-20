import {Card,Form,Input, Button, Checkbox,message} from "antd";
import logo from "@/assets/logo.png";
import "./index.scss"
import { useStore } from "@/store";
import {useNavigate} from "react-router-dom";

function Login(){
    const {loginStore} = useStore()
    const navigate = useNavigate()
    async function onFinish(values){
        console.log(values)
        //values放置的是所有表单项中用户输入的内容
        //登录
        const {mobile,code} = values
        await loginStore.getToken({
            mobile,
            code
        })
        //跳转首页
        navigate("/",{replace:true})
        //提示用户
        message.success('登录成功');
    }

    return(
        <div className="login">
            <Card className="login-container">
                <img className="login-logon" src={logo} alt="" />
                {/*登录表单*/}
                {/*子项所用到的触发事件需要在Form中声明一下才可以*/}
                <Form 
                    validateTrigger={["onBlur", "onChange"]}
                    initialValues={{
                        remember: true,
                        mobile: '13811111111',
                        code: '246810'
                      }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="mobile"
                        rules={[
                          {
                            required: true,
                            message: '请输入手机号',
                          },
                          {
                            pattern: /^1[3-9]\d{9}$/ ,
                            message: '请输入正确的手机号',
                            validateTrigger:"onBlur"
                          }
                        ]}                    
                    >
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                          {
                            required: true,
                            message: '请输入密码',
                          },
                          {
                            len: 6,
                            message: '请输入6位数密码',
                            validateTrigger:"onBlur"
                          },
                        ]}     
                    >
                        <Input size="large" placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className="login-checkbox-label">同意条款</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login