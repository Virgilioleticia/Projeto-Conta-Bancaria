import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

export function main() {

    let opcao: number;

    // Novas Instâncias da Classe Conta (Objetos)
    const c1: Conta = new Conta(1, 1234, 1, 'Letícia Virgilio', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Júlia Castro', 600000.00);

    // Visualizando os dados da Conta c1
    c1.visualizar();

    // Visualizando os dados da Conta c2
    c2.visualizar();

    // Visualizando o saldo da Conta c1
    console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`)

    
   // Alterando o Saldo da Conta c2
   c2.saldo = 900000.00;

   // Visualizando o saldo da Conta c2 após alteração
   console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`)

   // Saque nas Contas 
   console.log(`Sacar 100.00 reais da Conta c1: ${c1.sacar(100)}`); //true
   c1.visualizar;

   console.log(`Sacar 1000000.00 reais da Conta c2: ${c2.sacar(1000000)}`); //false
   c2.visualizar();

   // Depósito nas Contas 
   console.log(`Depositar 200000.00 reais da Conta c1: `);
   c1.depositar(200000.00)
   c1.visualizar();

   console.log(`Depositar 300000.00 reais da Conta c2: `); 
   c1.depositar(300000.25)
   c2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANK LETS GO GENERATION              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBank Lets Go Generation - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Letícia Virgilio");
    console.log("Generation Brasil - virgilioleticiao240902@gmail.com");
    console.log("https://github.com/Virgilioleticia");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();