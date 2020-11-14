import req from '../https';

const users = {
    detail() {
        return req('get', '/getAuthUser');
    }
};

export default users;
