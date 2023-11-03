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
    [] possono esserci più magazzini che hanno dei prodotti con nome, prezzo e quantità
    [] Ottieni le info su prodotto da nome
    [] Ottinei qty su prodotto da nome
- Cart, 
    [] aggiungi quantità di prodotti al carrello , solo se disponibile in storage
    [] rimuovi qty di prod dal carrello 
    [] ottieni il prezzo totale del carrello in €
    [] Compra -> Rimuovi qty di prodotti dallo storage