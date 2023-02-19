const SpendingController = require('../controller/spending.controller.js');

module.exports = (app) => {
    app.post("/api/spending/new", SpendingController.createSpending);
    app.get("/api/spending", SpendingController.findAllSpending);
    app.get("/api/spending/:id", SpendingController.findOneSpending);
    app.put("/api/spending/:id/edit", SpendingController.updateSpending);
    app.delete("/api/spending/:id", SpendingController.deleteSpending);
}