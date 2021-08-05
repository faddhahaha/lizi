const App = () => import('../views/App');
let route = [
    {
            path:"/App",
            models:()=>[import('../model/global')],

            component:App
    }
]
export default route 