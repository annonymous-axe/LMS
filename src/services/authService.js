import users from '../data/users.json';

export const authService = {
    login(username, password){
        const user = users.find(
            (u) => u.username == username && u.password == password
        );

        if(user){
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        return null;
    },

    logout(){
        localStorage.removeItem('user');
    },

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    },

    isAuthenticated(){
        return !!localStorage.getItem('user');
    },

    hasRole(role){
        const user = localStorage.getItem('user');
        return user && user.role === role;
    }

};