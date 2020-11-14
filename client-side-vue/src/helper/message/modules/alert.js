import store from '../../../store';

export default async function(msg, color = 'undefined', timeout = 6000) {
    store.dispatch('snackbar/openSnackbar', {
        msg: msg,
        color: color,
        timeout: timeout
    });
}
