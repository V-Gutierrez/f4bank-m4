import express from "express";
import RoutesController from "./Controllers/RoutesController";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    routes() {
        this.app.use(express.json());

        this.app.route("/").get((req, res) => {
            res.send({
                versão: "0.0.1 - construído por Victor Gutierrez",
            });
        });

        this.app
            .route("/f4bank/v1/createaccount")
            .post(RoutesController.createaccount);
        this.app
            .route("/f4bank/v1/checkbalance")
            .get(RoutesController.checkbalance);
        this.app.route("/f4bank/v1/deposit").post(RoutesController.deposit);
        this.app.route("/f4bank/v1/pay").post(RoutesController.paybill);
        this.app.route("/f4bank/v1/transfer").get(RoutesController.transfer);
        this.app
            .route("/f4bank/v1/transactions")
            .get(RoutesController.seeTransactions);
    }
}

export default new Server();
