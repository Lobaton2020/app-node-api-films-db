const auth = (req, res) => {
    res.send(`
        <h1>"Bienvenido a esta api de test, 2020-02-25</h1>
            <h1>USO ENDPOINTS</h1>
            <h3>Host: https://hostname/</h3>
            <h2>FILMS</h2>
            <p>
            body: title:type.STRING, <br />
            description: type.STRING, <br />
            score:type.INTEGER,<br />
            director:type.STRING<br />
            </p>
            <ul>
            <li>GET: /api/films</li>
            <li>POST: /api/films</li>
            <li>GET: /api/films/:id</li>
            <li>PUT: /api/films/:id</li>
            <li>DELETE: /api/films/:id</li>
            </ul>
            <h2>USERS</h2>
            <ul>
            <li>POST: /api/users/login { email, password }</li>
            <li>POST: /api/users/register { username,email, password }</li>
            </ul>
        `
    )
}

export { auth }