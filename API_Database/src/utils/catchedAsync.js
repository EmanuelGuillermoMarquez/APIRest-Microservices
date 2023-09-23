module.exports = (controller) => {
    return function(req, res, next) {
        controller(req, res).catch((err) => next(err));
    };
};

// (controller) => (req, res, next) => controller(req, res).catch((err) => next(err)); Es la misma función simplificada