const initState = {
    visible:false,
    
};

export default {
    namespace:'App',
    state:initState,
    subscriptions:{},
    effects:{

    },
    reducers:{
        //打开购物车
        showDrawer(state){
                state.visible =true;
                return {...state}
        },
        //关闭购物车
        onClose(state){
            state.visible =false;
            return {...state}
        },

    }
    
   
}