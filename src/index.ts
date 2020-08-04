import Server from "./server";

const port = process.env.PORT;

Server.app.listen(port, () => {
    console.log(`Executando em: ${port}`);
});
