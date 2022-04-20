import {BrowserRouter,Route,Routes,unstable_HistoryRouter as HistoryRouter} from "react-router-dom"
import { history } from "@/utils/history";
import GeekLayout from "@/pages/Layout";
import Login from "./pages/Login";
import {AuthComponent} from "@/components/AuthComponents";
import "./App.css";
import Publish from "@/pages/Publish";
import Article from "@/pages/Article";
import Home from "@/pages/Home";

function App() {
  return (
    //路由配置
    < HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/*创建路由path和组件的对应关系*/}
          {/*需要鉴权处理*/}
          <Route path="/" element={
            <AuthComponent>
              <GeekLayout />
            </AuthComponent>
          }>
            <Route index element={<Home />}></Route>            
            <Route path="article" element={<Article />}></Route>            
            <Route path="publish" element={<Publish />}></Route>            
          </Route>
          {/*不需要鉴权处理*/}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </ HistoryRouter>
  );
}

export default App;
