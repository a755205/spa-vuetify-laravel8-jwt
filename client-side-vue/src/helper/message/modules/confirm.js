import store from '../../../store';

export default async function(msg, fn) {
    store.dispatch('confirm/open', {
        msg: msg,
        fn: fn
    });
}
