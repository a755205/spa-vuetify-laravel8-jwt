export default function(err, fieldName) {
    if (err) {
        let cc = JSON.parse(JSON.stringify(err));
        return cc.errors[fieldName][0];
    } else {
        return '';
    }
}
