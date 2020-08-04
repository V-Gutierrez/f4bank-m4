import Server from "./server";

const port = 3333;

Server.app.listen(port, () => {
    console.log(`Executando em: ${port}`);
});
