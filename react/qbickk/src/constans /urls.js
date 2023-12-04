const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';

const urls = {
    users,
    posts:{
        byUserId: (userId)=>`${users}/${userId}/posts`
    }
};

export {
    baseURL, urls
}