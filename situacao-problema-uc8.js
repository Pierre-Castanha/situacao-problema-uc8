                                             ///////////////////////////////////////////////////////
                                             //              SENAI - Módulo : UC 8                //
                                             //          Sistema de Cadastro de Eventos           //
                                             //          Situação Problema - 18.10.2021           //
                                             // Instrutores: Thiago Nascimento && Ordilei Sabella //
                                             ///////////////////////////////////////////////////////


/* /////////////////////////////////////////////////////// R E Q U I S I T O S ///////////////////////////////////////////////
//                                                                                                                          //
//   1.Você será responsável por escolher qual técnica irá atender os seguintes requisitos:                                 //
//                                                                                                                          //
//   -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido   //
//     por data inválida.                                                                                                   //                                                                                                 //
//                                                                                                                          //
//   -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.//
//                                                                                                                          //
//   -Listar participantes e palestrantes por evento.                                                                       //
//                                                                                                                          //
//   -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será  //
//    permitido por ter excedido o limite.                                                                                  //
//                                                                                                                          //
//   -Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.                                        //
//                                                                                                                          //
//   Para criação desse sistema de cadastro, você, enquanto programador(a) responsável, deverá solucionar os seguintes      //
//   desafios:                                                                                                              //
//                                                                                                                          //
//    - Descrever a sequência de passos lógicos necessários para criação do sistema solicitado pela empresa.                //
//                                                                                                                          //
//    -Aplicar técnicas de programação e ferramentas para desenvolvimento do código.                                        //
//                                                                                                                          //
//    -Aplicar linguagem de programação para implementação do sistema                                                       //
//                                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/




let CadEvento = ["Aulão sobre JavaScript", "Paletra sobre Água Portável", "TI em tempo de Covid", "Onovo mundo Híbrido", "Programação em tempo de Covid"];
let CadPalestrante = ["Professor João Albertto", "Gustavo Marins", "João Jorge", "Humberto Leal", "O Comendador"];
let CadParticipante = ["Paulo", "Ricardo", "Emanoel", "James", "Maria", "Joana", "Carlos", "Amara", "Celida", "Ingrid", "Caetano", "Severina"];
let CadDataEventos = ["12/11.2021", "24/11/2021", "22/10/2021", "30/10/2021", "23/11/2021"];
let login = "Amaro";
let senha = "12345";
let datNascParticipante = "10/17/2021"
let dataEvento = "10/18/2021";
let EventoInserir = "Palestra Sobre IA";
let PalestrantesInserir = "Professor Antonio de Padua"

let dataAtual = new Date();
let item = "2";

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


let dataNasc = new Date(1990, 10, 12);
let dataEvento1 = new Date(2021, 10, 12);
let dataMili = Math.abs(dataEvento1.getTime() - dataNasc.getTime());
let diasdeDif = Math.ceil(dataMili / (1000 * 60 * 60 * 24));
let anos = Math.ceil(diasdeDif / 365);

if (item == "1") {

    if (login == "Amaro" && senha == "12345") {
        console.log("Usuário Logado")
        console.log("")
        console.log("Insira a data de Evento:   " + dataEvento)

        if (dataEvento >= today) {
            console.log("------------------------------------------------------------------")
            console.log("Insira nome do Evento...........:  " + EventoInserir);
            console.log("------------------------------------------------------------------")
            console.log("Insira o Palestrante do Evento..:  " + PalestrantesInserir);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------")

            console.log("Você cadastrou o Evento:   " + EventoInserir + " -  Que será realizado em:   " + dataEvento + "  -  " + "Com o Palestrante:  " + PalestrantesInserir);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------")
            CadEvento.push(EventoInserir);
            CadPalestrante.push(PalestrantesInserir);
            CadDataEventos.push(dataEvento);
            console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
            // console.log(CadEvento[0] + CadPalestrante[0] + CadParticipante[0])
            console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
        } else {
            console.log("Data de Evento deverá ser superior a data atual, insira corrretamente a data de evento futuro")
        }
    } else {
        console.log("Usuário ou Senha incorreta")

    }
} else if (item == 2) {

    if (anos >= 18) {
        console.log("--------------------------------------")
        console.log("Você pode se escrever no evento");
        console.log("--------------------------------------")
        console.log("Escolha a data de Evento:  " + `${CadDataEventos[0]}`)
        console.log("--------------------------------------")
    } else {
        console.log("------------------------------------------------------------------------------------------")
        console.log("Você não possui idade mínima (18 anos), infelizmente você não pode se escrever no evento")
        console.log("------------------------------------------------------------------------------------------")
    }


    if (`${CadEvento[0]}` == "Aulão sobre JavaScript" && anos >= 18) {
        console.log("---------------------------------------------------------------------------")
        console.log("Esse evento ainda possui vaga! Deseja Continuar a inscrição?")
        console.log("---------------------------------------------------------------------------")
        console.log("Você foi inscrito no envento.....:  " + " (  " + `${CadEvento[0]}` + "  )" + "  No dia..:  " + `${CadDataEventos[0]}`)
        console.log("---------------------------------------------------------------------------")
    } else {
        console.log("Quantidade de Participantes excedido, escolha novo Evento!")
    }


} else {
    console.log("------------------------------------------------------------------------------------------")
    console.log("SUA OPÇÃO É LISTAR TODOS OS EVENTOS E PARTICIPANTES")
    console.log("------------------------------------------------------------------------------------------")

    
    for (let contador = 0; contador < CadEvento.length; contador++) {
        console.log("Evento:  " + `${CadEvento[0]}` + "   " + " data de Evento:  " + `${CadDataEventos[0]}` + "   " + "   Participantes:   " + CadParticipante)

    }
}

