const tokenValidator = (token) => {
    jwt.verify(token, "secret", (err, decoded) => {
        
    })
}