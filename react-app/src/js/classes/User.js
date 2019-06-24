class User {
    constructor() {
        this.color = 'green';
        this.userName = ''
    }

    getColor = () => this.color;
    getUserName = () => this.userName;

    setColor(color) {
        this.color = color;
    }

    setUserName(userName) {
        this.userName = userName;
    }
}

export default User;