const initState = [
        {name:'XS',action:false},
        {name:'S',action:false},
        {name:'M',action:false},
        {name:'ML',action:false},
        {name:'L',action:false},
        {name:'XL',action:false},
        {name:'XXL',action:false},
    ];

export default {
    namespace:'size',
    state:initState,
    subscriptions:{},
    effects:{

    },
    reducers:{
        changeSize(state,{payload}){ 
            state.map((item)=>{
                if(item.name === payload){
                    item.action=!item.action;
                }
                
            })
            return [...state]
        },
       
    }
}