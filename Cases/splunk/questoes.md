# CTF / Incidente no portal

Dados sintéticos para investigação defensiva. Todas as horas são UTC em 07/09/2026. 15 questões, 100 pontos cada.

## 1. Qual IP de origem está associado à cadeia completa de comprometimento do servidor web?
Formato: IPv4.

## 2. Qual é o IP do servidor web comprometido?
Formato: IPv4.

## 3. Quantas portas de destino distintas foram sondadas por essa origem no servidor web? Conte event_type=flow.
Formato: Número inteiro.

## 4. Qual endpoint de upload foi descoberto e depois recebeu o arquivo usado no comprometimento?
Formato: Caminho HTTP, começando por /.

## 5. Qual é o caminho absoluto do arquivo salvo e posteriormente utilizado como web shell?
Formato: Caminho absoluto no Linux.

## 6. Em que horário UTC o POST que enviou esse arquivo ocorreu?
Formato: HH:MM:SS, em 07/09/2026.

## 7. Qual UID efetivo aparece no primeiro processo de id iniciado pelo Apache nessa cadeia?
Formato: Número inteiro.

## 8. Qual é o caminho absoluto do binário Python descoberto com SUID?
Formato: Caminho absoluto no Linux.

## 9. Qual modo octal foi registrado para esse binário?
Formato: Quatro dígitos, sem prefixo.

## 10. Qual EUID o Python tinha ao ler os arquivos de contas?
Formato: Número inteiro.

## 11. Qual arquivo com hashes de senhas foi lido com sucesso pelo Python?
Formato: Caminho absoluto no Linux.

## 12. Qual arquivo de cadastro de usuários foi lido pelo Python antes desse arquivo de hashes?
Formato: Caminho absoluto no Linux.

## 13. Qual nome de usuário foi criado durante a cadeia?
Formato: Somente o nome da conta.

## 14. Quantas autenticações FTP falharam para a mesma origem? Conte somente vsftpd.log para evitar duplicar eventos de outras fontes.
Formato: Número inteiro.

## 15. Qual código de resposta FTP confirma a rejeição dessas autenticações?
Formato: Três dígitos.