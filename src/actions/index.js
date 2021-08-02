export const increment = () =>{
    return{
        type : 'INCREMENT'
    }
}

export const decrement = () =>{
    return{
        type : 'DECREMENT'
    }
}

export const decrementMany = (number) =>{
    return{
        type : 'DECREMENTMANY',
        payload : number
    }
}

export const incrementMany = (number) =>{
    return{
        type : 'INCREMENTMANY',
        payload : number
    }
}