import { http } from './config'

export default {
    getAll: () => {
        return http.get(`/posts`);
    },
    getId1: () => {
        return http.get(`/posts/1`);
    },
    getCommentsId1: () => {
        return http.get(`/posts/1/comments`);
    },
    getAlbunsId1: () => {
        return http.get(`/users/1/albums`);
    },
    getPhotosId1: () => {
        return http.get(`/albums/1/photos`);
    },
    post: obj => {
        return http.post(`/posts`, obj);
    },
    put: obj => {
        return http.put(`/posts/1`, obj);
    }
}