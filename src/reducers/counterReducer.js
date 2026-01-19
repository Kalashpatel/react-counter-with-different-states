
export const SCENARIOS = {
    CASE_1: [10],
    CASE_2: [{count: 0}],
    CASE_3: [{count: 0}, {count2: 0}],
    CASE_4: [{count: 0, count2: 0}]
}

export const countReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_COUNT':
        case 'DECREMENT_COUNT': {
            const val = action.type === 'INCREMENT_COUNT' ? 1 : -1;
            return state.map((item, index) => {
                if(typeof item === 'number' && index === 0) return item + val;
                if(item && typeof item === 'object' && 'count' in item){
                    return{...item, count: Number(item.count) + val};
                }
                return item;
            })
        }
        case 'INCREMENT_COUNT2':
        case 'DECREMENT_COUNT2': {
            const val = action.type === 'INCREMENT_COUNT2' ? 1 : -1;
            return state.map((item) => {
                if(item && typeof item === 'object' && 'count2' in item){
                    return{...item, count2: Number(item.count2) + val};
                }
                return item;
            })
        }
        case 'RESET':{
            return state.map((item) => {
                if(typeof item === 'number') return 0;
                if(typeof item === 'object'){
                    const reset = {...item};
                    if('count' in reset) reset.count = 0;
                    if('count2' in reset) reset.count2 = 0;
                    return reset
                }
                return item;
            })
        }
        default:
            return state;
    }
}