
const error = (store) => (next) => (action) => {
    if(action.payload.data === action.error) {
        console.log('This action has an error')
    } else {
        next(action);
    }
}

export default error;

// миддлвар: на вход экшн =>
// хранилище до срабатывания экшна, сам экшн, хранилище после экшна, текущее время срабатывания экшна