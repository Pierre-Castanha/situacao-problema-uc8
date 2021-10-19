# situacao-problema-uc8

ATIVIDADE SITUAÇÃO PROBLEMA – UC 8
Aluno: Pierre Leon Castanha de Lima

DESCREVER A SEQUÊNCIA DE PASSOS LÓGICOS – CADASTRO DE EVENTOS

1.	Foram criados as Array:
a.	CadEvento;
b.	CadPalestrante;
c.	CadParticipante;
d.	CadDataEventos.

2.	Criadas as variáveis, através da “let”:
Login, senha, datNascParticipante, DataEvento, EventoInserir, PalestranteInserir, dataAtual, item, today, dd, mm, yyyy, DataNasc, dataEvento1, dataMili, diasDif, anos, contador.

3.	Criada uma rotina para saber a idade em anos do participante, usando as variáveis: dataNasc, dataEvento1, dataMili, diasdeDif, anos. 

4.	Optei para identificar 03 (três) escolhas pelo usuário:
a.	 Item = 1 – Cadastro de Eventos;
b.	Item = 2 – Cadastro de Participantes; e
c.	Item – 3 – Lista de Eventos e Participantes.

5.	Na escola do Item = 1 – Cadastro de Eventos:
a.	Faz o login e senha;
b.	Verifica se data de evento digitado é maior que data atual, caso seja pede para inserir o evento e palestrante, inserindo na array: CadEvento, CadPalestrante;
c.	Caso negativo, informa ao usuário “Data de evento deverá ser superior a data atual, insira corretamente a data de evento futuro”.

6.	Na escola do Item = 2 – Cadastro de Participante:
a.	Verifica se o participante possui mais de 18 anos, caso tenha, informa a ele que pode se inscrever no evento; Caso não tenha idade suficiente, informa ao usuário que não possui idade para participar do evento;
b.	Após a verificação da idade, confirmando que o mesmo possui a idade de 18 anos ou superior, Solicita a data de evento;
c.	Verifica se o evento possui vaga suficiente para nova inscrição, caso tenha, inscreve o participante no evento;
d.	Caso, não tenha vaga, informa ao participante que deverá se escrever em novo evento. 
7.	Na escola do Item = 3 – Lista de Evento e Participantes:
a.	Lista todos os eventos e participantes.
