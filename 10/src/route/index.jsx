import  React from  'react'
import {Router,Route,Switch} from 'dva/router'
// import dynamic from 'dva/dynamic'
// import router1 from  './router1'

// const allRouter = [...router1];

// function RouterCompontent ({history,app}){
//     console.log(history, app);
//     debugger
//     return (
//         <Router history={history}>
//             <Switch>
//                 {

//                     allRouter.map(({path,...dynamics},index)=>{
//                         console.log(dynamics)
//                         return (
//                             <Route key={index} path={path} exact compontent={dynamics.component} />
//                         )
//                     })
                    
//                 }
//             </Switch>


//         </Router>
//     )
// }
import App from  '../views/App'


function RouterCompontent ({history}){
    
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    );
}
export default RouterCompontent