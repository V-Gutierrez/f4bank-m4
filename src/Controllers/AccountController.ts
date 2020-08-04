import { validateCPF } from "../Helpers/CPFValidator";
import { validateAge } from "../Helpers/AgeValidator";

import AccountRepository from "../Repositories/AccountRepository";

class AccountController {
    async createAccount(
        name: string,
        CPF: string,
        birthdate: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await validateAge(birthdate);

            await AccountRepository.queryDataBaseAndCreateAccount({
                name: name,
                CPF: CPF,
                birthdate: birthdate,
            });
        } catch (error) {
            throw "Houve um erro na abertura da conta, cheque seus cadastrais, lembrando que apenas maiores de idade podem criar conta";
        }
    }

    async checkBalance(CPF: string): Promise<void | string> {
        try {
            await validateCPF(CPF);
            const response = await AccountRepository.queryDatabaseForUserBalance(
                CPF
            );
            return response;
        } catch (error) {
            throw "Houve um erro, cheque seus cadastrais";
        }
    }

    async deposit(CPF: string, amount: number): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseForDeposit({
                CPF,
                value: amount,
            });
        } catch (error) {
            throw "Houve um erro no depósito em conta, cheque seus cadastrais";
        }
    }

    async payBill(
        CPF: string,
        value: number,
        description: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseAndMakeTransaction({
                CPF,
                value,
                description,

                type: "payment",
            });
        } catch (error) {
            throw "Houve um erro no pagamento da conta, cheque seu saldo e dados cadastrais";
        }
    }

    async transferMoney(
        CPF: string,
        value: number,
        description: string,
        destinationCPF: string
    ): Promise<void> {
        try {
            await validateCPF(CPF);
            await AccountRepository.queryDatabaseAndMakeTransaction({
                CPF,
                value,
                description,
                type: "transference",
                CPF2: destinationCPF,
            });
        } catch (error) {
            throw "Houve um erro na transferência, cheque os dados e o seu saldo e tente novamente";
        }
    }

    async seeTransactions(CPF: string) {
        try {
            await validateCPF(CPF);
            const response = await AccountRepository.queryDatabaseForTransactions(
                CPF
            );

            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AccountController();
