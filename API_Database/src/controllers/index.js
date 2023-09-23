const { catchedAsync } = require("../utils");

module.exports = {
    listData: catchedAsync(require("./listData")),
    getData: catchedAsync(require("./getData")),
    createData: catchedAsync(require("./createData")),
    updateData: catchedAsync(require("./updateData")),
    deleteData: catchedAsync(require("./deleteData")),
};