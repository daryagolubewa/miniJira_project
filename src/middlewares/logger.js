
export default function logger(store) {
    return function(next) {
        return function(action) {
            next(action)
            console.log('LOGGER --->', store.getState())
        }
    }
}