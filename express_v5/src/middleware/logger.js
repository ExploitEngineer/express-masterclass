const Logger = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
};

export default Logger;
