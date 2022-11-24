export const saveUserToDB = (user) => {
    const email = user.email;
    const url = `${process.env.REACT_APP_server}/user/${email}`

    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        const accessToken = data.token;
        localStorage.setItem('rmiToken', accessToken);
    })
}