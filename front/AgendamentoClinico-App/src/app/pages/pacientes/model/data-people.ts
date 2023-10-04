export interface Person {
  name: string;
  cpf: string;
  address: string;
  phone: string;
}

export const DATA_PEOPLE: Person[] = [
  { name: "João da Silva", cpf: "123.456.789-00", address: "Rua A, 123", phone: "(11) 1234-5678" },
  { name: "Maria Oliveira", cpf: "987.654.321-00", address: "Avenida B, 456", phone: "(22) 9876-5432" },
  { name: "Pedro Santos", cpf: "555.555.555-00", address: "Travessa C, 789", phone: "(33) 5555-5555" },
  { name: "Ana Souza", cpf: "111.222.333-00", address: "Praça D, 987", phone: "(44) 1111-2222" },
  { name: "Carlos Pereira", cpf: "999.888.777-00", address: "Estrada E, 654", phone: "(55) 9999-8888" },
  { name: "João da Silva", cpf: "123.456.789-00", address: "Rua A, 123", phone: "(11) 1234-5678" },
  { name: "Maria Oliveira", cpf: "987.654.321-00", address: "Avenida B, 456", phone: "(22) 9876-5432" },
  { name: "Pedro Santos", cpf: "555.555.555-00", address: "Travessa C, 789", phone: "(33) 5555-5555" },
  { name: "Ana Souza", cpf: "111.222.333-00", address: "Praça D, 987", phone: "(44) 1111-2222" },
  { name: "Carlos Pereira", cpf: "999.888.777-00", address: "Estrada E, 654", phone: "(55) 9999-8888" },
  { name: "Mariana Costa", cpf: "777.888.999-00", address: "Alameda F, 321", phone: "(66) 7777-8888" },
  { name: "Lucas Oliveira", cpf: "555.666.777-00", address: "Rua G, 987", phone: "(44) 5555-5555" },
  { name: "Amanda Rodrigues", cpf: "111.222.333-11", address: "Avenida H, 123", phone: "(11) 2222-3333" },
  { name: "Ricardo Santos", cpf: "444.555.666-00", address: "Travessa I, 321", phone: "(22) 4444-5555" },
  { name: "Fernanda Almeida", cpf: "888.777.666-00", address: "Praça J, 456", phone: "(33) 8888-7777" },
  { name: "Eduardo Pereira", cpf: "333.222.111-00", address: "Estrada K, 654", phone: "(55) 3333-2222" },
  { name: "Camila Silva", cpf: "555.444.333-00", address: "Alameda L, 987", phone: "(66) 5555-4444" },
  { name: "Gustavo Souza", cpf: "999.333.777-00", address: "Rua M, 123", phone: "(11) 9999-3333" },
  { name: "Fernanda Pereira", cpf: "222.777.888-00", address: "Avenida N, 456", phone: "(22) 2222-7777" },
  { name: "Thiago Oliveira", cpf: "777.444.666-00", address: "Travessa O, 321", phone: "(33) 7777-4444" },
  { name: "Larissa Santos", cpf: "555.555.111-00", address: "Praça P, 987", phone: "(55) 5555-1111" },
  { name: "Marcelo Costa", cpf: "333.666.999-00", address: "Estrada Q, 654", phone: "(66) 3333-6666" },
  { name: "Juliana Alves", cpf: "222.888.777-00", address: "Alameda R, 123", phone: "(11) 2222-8888" },
  { name: "Leonardo Pereira", cpf: "777.333.222-00", address: "Rua S, 456", phone: "(22) 7777-3333" },
  { name: "Beatriz Silva", cpf: "555.111.333-00", address: "Avenida T, 321", phone: "(33) 5555-1111" },
  { name: "Rafael Santos", cpf: "999.333.111-00", address: "Travessa U, 987", phone: "(55) 9999-3333" },
  { name: "Lívia Oliveira", cpf: "222.444.666-00", address: "Praça V, 654", phone: "(66) 2222-4444" },
  { name: "Lucas Almeida", cpf: "333.777.444-00", address: "Estrada W, 123", phone: "(11) 3333-7777" },
  { name: "Mariana Rodrigues", cpf: "555.555.444-00", address: "Alameda X, 456", phone: "(22) 5555-5555" },
  { name: "Diego Pereira", cpf: "999.888.666-00", address: "Rua Y, 321", phone: "(33) 9999-8888" },
  { name: "Isabela Costa", cpf: "222.444.333-00", address: "Avenida Z, 987", phone: "(55) 2222-4444" },
  { name: "Mateus Souza", cpf: "333.777.111-00", address: "Travessa AA, 654", phone: "(66) 3333-7777" },
  { name: "Larissa Oliveira", cpf: "555.666.444-00", address: "Praça BB, 123", phone: "(11) 5555-6666" },
  { name: "Rafaela Santos", cpf: "999.111.333-00", address: "Estrada CC, 456", phone: "(22) 9999-1111" },
  { name: "Gustavo Almeida", cpf: "222.777.444-00", address: "Alameda DD, 321", phone: "(33) 2222-7777" },
  { name: "Henrique Silva", cpf: "555.555.666-00", address: "Rua EE, 987", phone: "(55) 5555-5555" },
  { name: "Natália Pereira", cpf: "999.666.333-00", address: "Avenida FF, 654", phone: "(66) 9999-6666" },
  { name: "Cristian Oliveira", cpf: "222.444.777-00", address: "Travessa GG, 123", phone: "(11) 2222-4444" },
  { name: "André Santos", cpf: "777.888.111-00", address: "Praça HH, 456", phone: "(22) 7777-8888" },
  { name: "Lorena Costa", cpf: "555.111.444-00", address: "Estrada II, 321", phone: "(33) 5555-1111" },
  { name: "Fernando Almeida", cpf: "999.333.555-00", address: "Alameda JJ, 987", phone: "(55) 9999-3333" },
  { name: "Tatiana Silva", cpf: "222.444.111-00", address: "Rua KK, 654", phone: "(66) 2222-4444" },
  { name: "Rodrigo Oliveira", cpf: "777.111.666-00", address: "Travessa LL, 123", phone: "(11) 7777-1111" },
  { name: "Carolina Pereira", cpf: "555.666.111-00", address: "Avenida MM, 456", phone: "(22) 5555-6666" },
  { name: "Marcela Santos", cpf: "999.111.444-00", address: "Praça NN, 321", phone: "(33) 9999-1111" },
  { name: "Renan Almeida", cpf: "222.777.111-00", address: "Estrada OO, 987", phone: "(55) 2222-7777" },
  { name: "Vanessa Silva", cpf: "555.111.666-00", address: "Alameda PP, 654", phone: "(66) 5555-1111" },
  { name: "Rogério Oliveira", cpf: "999.666.444-00", address: "Rua QQ, 123", phone: "(11) 9999-6666" },
  { name: "Aline Costa", cpf: "222.444.777-00", address: "Travessa RR, 456", phone: "(22) 2222-4444" },
];
