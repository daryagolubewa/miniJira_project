

export const incrementAction = (data) => {
    return {type: 'INCREMENT', payload: { data: data }, error: 'error'}
}

export const decrementAction = (data) => {
    return {type: 'DECREMENT', payload: { data: data}, error: 'error'}
}

export const resetAction = () => {
    return {type: 'RESET'}
}