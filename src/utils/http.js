//封装axios
//实例化 请求拦截器 响应拦截器

import axios from "axios"; 
import { getToken } from "./token";
import {history} from "./history"

const http=axios.create({
    baseURL:"http://geek.itheima.net/v1_0",
    timeout:5000
})

//添加请求拦截器
http.interceptors.request.use((config)=>{
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

//添加响应拦截器
http.interceptors.response.use((response)=>{
    //2xx 范围内的状态码都会触发该函数
    //对响应数据做点什么
    return response.data
},(error)=>{
    //超出2xx 范围内的状态码都会触发该函数
    //对错误数据做点什么
    console.dir(error)
    if(error.response.status === 401){
        //跳回到登录页
        history.push("/login")
    }
    return Promise.reject(error)
})

export {http}