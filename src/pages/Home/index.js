//1看官方文档，把echarts加入项目
//2不抽离定制化参数，先把最小化的demo跑起来
// 如何在react中获取dom uesRef
// 在什么地方获取dom节点 useEffect
//3按照需求，哪些参数需要自定义 抽象出来
import Bar from "@/components/Bar"

const Home=()=>{
    return(
        <div>
            {/*渲染Bar组件*/}
            <Bar 
                title="主流框架使用满意度" 
                xDate={["react", "vue", "angular"]}
                yDate={[30,40,50]}
                style={{width:"500px",height:"400px"}}/>
            <Bar 
                title="主流框架使用满意度2"
                xDate={["react", "vue", "angular"]}
                yDate={[60,70,80]}
                style={{width:"300px",height:"200px"}}/>
        </div>
    )
}

export default Home