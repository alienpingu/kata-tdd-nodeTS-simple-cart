# boilerplate-ts-node-jest

## Installation Instructions

```JavaScript
npm install
npm run dev     //run in development mode
npm run test    //run tests
npm run build   //build ./dist bundle
npm start       //run javascript bundle
```
## Instruction 

Storage e Cart

L'utente può aggingere item al carrello
Controllare che la quantità degli item nel carrello sia minore o ugale di quella in storage

- Storage, 
    - [x] possono esserci più magazzini che hanno dei prodotti con nome, prezzo e quantità
    - [x] Ottieni le info su prodotto da nome
    - [x] Ottinei qty su prodotto da nome
- Cart, 
    - [x] aggiungi quantità di prodotti al carrello , solo se disponibile in storage
    - [ ] rimuovi qty di prod dal carrello 
    - [x] ottieni il prezzo totale del carrello in €
    - [x] può esser calcolato il prezzo di uno sconto dato un codice
    - [ ] Compra -> Rimuovi qty di prodotti dallo storage
