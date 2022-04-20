//1.判断token是否存在
//2.存在，正常渲染
//3.不存在，重新定向到登录界面

//高阶组件：把一个组件当成另外一个组件的参数传入
//然后通过一定的判断返回新的组件

import {getToken} from "@/utils"
import {Navigate} from "react-router-dom"

function AuthComponent({children}){
    const isToken = getToken()
    console.log(isToken)
    if(isToken){
        return <>{children}</>
    }else{
        return <Navigate to="/login" replace/>
    }
}

export {
    AuthComponent
}