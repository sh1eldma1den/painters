
const authenticationRule = (req, res, next) => {
    if (!req.oidc.isAuthenticated()){
      res.status(401).send('You must authenticate yourself first.');
    }else{
        next();
    }
    
};

module.exports = {
    authenticationRule
};