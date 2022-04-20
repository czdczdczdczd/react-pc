//封装图标bar组件
import * as echarts from 'echarts';
import {useEffect, useRef} from "react"

function Bar({title,xDate,yDate,style}){
    const domRef = useRef()
    const chartInte = () =>{
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(domRef.current);
        // 绘制图表
        myChart.setOption({
        title: {
            text: title
        },
        tooltip: {},
        xAxis: {
            data: xDate
        },
        yAxis: {},
        series: [
            {
            name: '销量',
            type: 'bar',
            data: yDate
            }
        ]
        });
    }
    //执行这个初始化的函数
    useEffect(()=>{
        chartInte()
    },[])
    return(
        <div>
            {/*准备一个挂载节点*/}
            <div ref={domRef} style={style}></div>
        </div>
    )
}

export default Bar