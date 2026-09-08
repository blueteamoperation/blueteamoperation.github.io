window.CTF_QUESTIONS = [
  {
    "id": 1,
    "phase": "Reconhecimento",
    "title": "Qual IP de origem está associado à cadeia completa de comprometimento do servidor web?",
    "format": "IPv4",
    "salt": "dfir-cyan-v1-q1",
    "hashes": [
      "a6db955e7b375297e12506546013464419dca0d9e4dcbd7f7a300b92ff7f3ce6"
    ]
  },
  {
    "id": 2,
    "phase": "Reconhecimento",
    "title": "Qual é o IP do servidor web comprometido?",
    "format": "IPv4",
    "salt": "dfir-cyan-v1-q2",
    "hashes": [
      "e5a24730577352b167e9bfed0f36090b9aa6c76746c9a9dbb365939734d153a5"
    ]
  },
  {
    "id": 3,
    "phase": "Reconhecimento",
    "title": "Quantas portas de destino distintas foram sondadas por essa origem no servidor web? Conte event_type=flow.",
    "format": "Número inteiro",
    "salt": "dfir-cyan-v1-q3",
    "hashes": [
      "0816c8a0faf9d04b99bdc290cf3b80a1f854ef72ca77a49cc94020fde6e07979"
    ]
  },
  {
    "id": 4,
    "phase": "Enumeração",
    "title": "Qual endpoint de upload foi descoberto e depois recebeu o arquivo usado no comprometimento?",
    "format": "Caminho HTTP, começando por /",
    "salt": "dfir-cyan-v1-q4",
    "hashes": [
      "248204f9577e1a0de56d6858e3f6e2683a7b2ff1c995709dd14c46c457a06f64"
    ]
  },
  {
    "id": 5,
    "phase": "Acesso inicial",
    "title": "Qual é o caminho absoluto do arquivo salvo e posteriormente utilizado como web shell?",
    "format": "Caminho absoluto no Linux",
    "salt": "dfir-cyan-v1-q5",
    "hashes": [
      "c2277ebc36b31bc3d21d175303195555926b05b962aec067425c700cb1d668ad"
    ]
  },
  {
    "id": 6,
    "phase": "Acesso inicial",
    "title": "Em que horário UTC o POST que enviou esse arquivo ocorreu?",
    "format": "HH:MM:SS, em 07/09/2026",
    "salt": "dfir-cyan-v1-q6",
    "hashes": [
      "9dba46bc042a87926fb6aba9e5dd0abf5c8de6c63a48c13ffe683b8469f2fddb"
    ]
  },
  {
    "id": 7,
    "phase": "Execução",
    "title": "Qual UID efetivo aparece no primeiro processo de id iniciado pelo Apache nessa cadeia?",
    "format": "Número inteiro",
    "salt": "dfir-cyan-v1-q7",
    "hashes": [
      "4bc74cd7446eea79b4b2afaefdb2a3d36fabfa40c94e8cc09a413c26e7e7bb25"
    ]
  },
  {
    "id": 8,
    "phase": "Escalação",
    "title": "Qual é o caminho absoluto do binário Python descoberto com SUID?",
    "format": "Caminho absoluto no Linux",
    "salt": "dfir-cyan-v1-q8",
    "hashes": [
      "e403195fdd84d6a2ee83906be574a18fd23f095acbfdd7600e3fe43ec2bcec5a"
    ]
  },
  {
    "id": 9,
    "phase": "Escalação",
    "title": "Qual modo octal foi registrado para esse binário?",
    "format": "Quatro dígitos, sem prefixo",
    "salt": "dfir-cyan-v1-q9",
    "hashes": [
      "d7faadfc013e5d96043a117eb40f48b5ffad33138c7c5a565554fb0b3a1797be"
    ]
  },
  {
    "id": 10,
    "phase": "Escalação",
    "title": "Qual EUID o Python tinha ao ler os arquivos de contas?",
    "format": "Número inteiro",
    "salt": "dfir-cyan-v1-q10",
    "hashes": [
      "54c00cd61111194abe6c929397b9fb217cdca3a7c3944f84a6b38451e6989b3a"
    ]
  },
  {
    "id": 11,
    "phase": "Acesso a credenciais",
    "title": "Qual arquivo com hashes de senhas foi lido com sucesso pelo Python?",
    "format": "Caminho absoluto no Linux",
    "salt": "dfir-cyan-v1-q11",
    "hashes": [
      "2d7101efbd6135b7ed541b3ab47a31517afa36f87538f3d12d758ee524bcf8aa"
    ]
  },
  {
    "id": 12,
    "phase": "Acesso a credenciais",
    "title": "Qual arquivo de cadastro de usuários foi lido pelo Python antes desse arquivo de hashes?",
    "format": "Caminho absoluto no Linux",
    "salt": "dfir-cyan-v1-q12",
    "hashes": [
      "4627c74d7cfb3e2cd14b91c87606ad063e13a7ca019c01314b88e1593c8fa4d4"
    ]
  },
  {
    "id": 13,
    "phase": "Persistência",
    "title": "Qual nome de usuário foi criado durante a cadeia?",
    "format": "Somente o nome da conta",
    "salt": "dfir-cyan-v1-q13",
    "hashes": [
      "3fd1206200f11e9c5fee7c4951eec2b26583935b2c9afb8ee6c0c2eba2e2d493"
    ]
  },
  {
    "id": 14,
    "phase": "Movimento lateral",
    "title": "Quantas autenticações FTP falharam para a mesma origem? Conte somente vsftpd.log para evitar duplicar eventos de outras fontes.",
    "format": "Número inteiro",
    "salt": "dfir-cyan-v1-q14",
    "hashes": [
      "9003f168ba067fa1e26de3d0a654a784b384c46280fd9036473ffab2bf811d8a"
    ]
  },
  {
    "id": 15,
    "phase": "Movimento lateral",
    "title": "Qual código de resposta FTP confirma a rejeição dessas autenticações?",
    "format": "Três dígitos",
    "salt": "dfir-cyan-v1-q15",
    "hashes": [
      "f6c77e7c2a63212cbefd19b6fb390a6b9e4c7948fd6d91ef8323a78e1aa61ca7"
    ]
  }
];
