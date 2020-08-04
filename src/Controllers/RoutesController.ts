import { Request, Response } from "express";
import AccountController from "./AccountController";

class RoutesController {
    async createaccount(req: Request, res: Response) {
        const { name, cpf, birthdate } = req.body;

        try {
            await AccountController.createAccount(name, cpf, birthdate);
            res.status(200).json("Conta criada com sucesso");
        } catch (error) {
            res.status(401).json({
                error: error,
                status: 401,
            });
        }
    }
    async checkbalance(req: Request, res: Response) {
        const { cpf } = req.body;

        try {
            const response = await AccountController.checkBalance(cpf);
            res.json(response).status(200);
        } catch (error) {
            res.json({
                error: error,
                status: 401,
            }).status(401);
        }
    }

    async deposit(req: Request, res: Response) {
        const { cpf, amount } = req.body;

        try {
            await AccountController.deposit(cpf, amount);
            res.json(
                `Depósito de R$ ${amount}, para ${cpf} foi feito com sucesso`
            ).status(200);
        } catch (error) {
            res.json({
                error: error,
                status: 401,
            }).status(401);
        }
    }
    async paybill(req: Request, res: Response) {
        const { cpf, amount, description } = req.body;

        try {
            await AccountController.payBill(cpf, amount, description);
            res.json("Conta paga com sucesso").status(200);
        } catch (error) {
            res.status(401).json({
                error: error,
                status: 401,
            });
        }
    }
    async transfer(req: Request, res: Response) {
        const { cpf, amount, description, cpfDestination } = req.body;
        try {
            await AccountController.transferMoney(
                cpf,
                amount,
                description,
                cpfDestination
            );
            res.json("Transferencia realizada com sucesso").status(200);
        } catch (error) {
            res.status(401).json({
                error: error,
                status: 401,
            });
        }
    }
    async seeTransactions(req: Request, res: Response) {
        const { cpf } = req.body;

        try {
            const response = await AccountController.seeTransactions(cpf);
            res.json(response).status(200);
        } catch (error) {
            res.json({
                error: error,
                status: 401,
            }).status(401);
        }
    }
}

export default new RoutesController();
