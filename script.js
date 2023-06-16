'use strict';

function ex(n) {
    console.log(`

     🧸
    ex ${n}
    
    `);
}
/*
Simulazione Test Javascript Docente: Riccardo Degni
Nota 1: attenersi alle tracce, e leggere attentamente i dettagli di ogni requisito Nota 2: utilizzare unicamente i costrutti visti a lezione
Nota 3: è possibile consultare ogni fonte di documentazione online
Esercizio corretto: punteggio pieno
Esercizio algoritmicamente corretto ma non rispetta la traccia: punteggio a metà Esercizio con imperfezioni: punteggio a metà
Esercizio errato: nessun punteggio
*/

/*
Level: EASY (1pt per esercizio)
Ex 1: Set + algoritmi
crea una funzione che prende in ingresso due set di 5 parole e restituisce la differenza tra il numero di parole aventi lunghezza pari presenti nel primo set e il numero di parole che terminano in 'a' presenti nel secondo set.
chiamare la funzione con valori a piacere per stampare il risultato.
*/
ex(1)
{

    const setA = new Set(['ability', 'audience', 'wanderlust', 'believe', 'candidate'])
    const setB = new Set(['whatever', 'aloha', 'americana', 'financial', 'sea'])

    const deductionSet = function (firstSet, secondSet) {
        let counterWordsEven = 0
        let counterWordsEndA = 0
        firstSet.forEach(el => {
            if (el.length % 2 == 0)
                counterWordsEven++
        })
        secondSet.forEach(el => {
            if (el.charAt(el.length - 1) == 'a')
                counterWordsEndA++

        })
        return counterWordsEven - counterWordsEndA
    }

    console.log(deductionSet(setA, setB));

}
/*
Ex 2: Funzioni + array + oggetti + algoritmi
Scrivi una funzione che prenda in input un array di 3 oggetti rappresentanti persone (nome, cognome, età) e restituisca un nuovo array contenente le 3 persone ordinate per età crescente (dal più giovane al più anziano).
Chiamare la funzione per produrre l'array, e successivamente iterare su questo array per stampare le informazioni di tutte e 3 le persone.
Ad esempio:
dammiPersoneOrdinate ( [ {mario rossi, 32}, {luigi verdi, 25}, {peach pink, 30} ] )
produce: [{luigi verdi, 25}, {peach pink, 30}, {mario rossi, 32}, ]
*/
ex(2)
{

    const people = [
        {
            firstname: "Mario",
            lastname: "Rossi",
            age: 29
        },
        {
            firstname: "Luigi",
            lastname: "Verdi",
            age: 32
        },
        {
            firstname: "Peach",
            lastname: "Pink",
            age: 22
        }
    ]

    const sortByAge = function (persons) {
        persons.map = persons.sort((a, b) => a.age - b.age)
        return persons
    }

    sortByAge(people)

    people.forEach(person => {
        console.log(`${person.firstname} ${person.lastname} ${person.age}`);
    })

}
/*
Ex 3: Map + algoritmi
Crea un array di 6 stringhe a piacere.
Successivamente, crea una mappa che avrà come chiavi le parole contenute nell'array e per valori le loro lunghezze.
Itera sulla mappa per stampare, per ogni coppia al suo interno, la frase:
la parola ... contiene ... caratteri
*/
ex(3)
{

    const words = ['ready', 'dog', 'complete', 'rock', 'interest', 'travel']

    const mapWordsLength = new Map()

    words.forEach(word => {
        mapWordsLength.set(word, word.length)
    })

    mapWordsLength.forEach((length, word) => {
        console.log(`The word "${word}" contains ${length} characters`);
    })

}
/*
Ex 4: date + JSON Dato il seguente JSON: {
"date1": "1990-10-10", "date2": "1980-10-10", "date3": "1970-10-10", "date4": "1960-10-10"
}
trova la strategia corretta per stampare in output la data più "piccola" e la data più "grande" tra quelle fornite.
*/
ex(4)
{

    const jsonDates = `{
    "date1": "1990-10-10", 
    "date2": "1980-10-10", 
    "date3": "1970-10-10", 
    "date4": "1960-10-10"
}`

    const datesObject = JSON.parse(jsonDates);

    const datesArray = []

    for (const key in datesObject) {
        if (datesObject.hasOwnProperty(key)) {
            const dateString = datesObject[key];
            const dateObject = new Date(dateString); datesArray.push(dateObject);
        }
    }

    const smallestDate = new Date(Math.min(...datesArray)); const largestDate = new Date(Math.max(...datesArray));

    const smallestDateFormatted = `${smallestDate.getFullYear()}-${smallestDate.getMonth() + 1}-${smallestDate.getDate()}`;
    const largestDateFormatted = `${largestDate.getFullYear()}-${largestDate.getMonth() + 1}-${largestDate.getDate()}`;

    console.log("The smaller date:", smallestDateFormatted);
    console.log("The biggest date:", largestDateFormatted);

}
/*
Ex 5: Algoritmi
Data una stringa s a piacere, stampare solo i caratteri univoci, ovvero i caratteri che compaiono SOLO una volta nella lista.
Ad esempio:
abbazia -> zi
*/
ex(5)
{

    function printUniqueCharacters(string) {
        const frequencies = {};

        for (let i = 0; i < string.length; i++) {
            const character = string[i];
            if (frequencies[character]) {
                frequencies[character]++;
            } else {
                frequencies[character] = 1;
            }
        }

        let result = "";
        for (let i = 0; i < string.length; i++) {
            const character = string[i];
            if (frequencies[character] === 1) {
                result += character;
            }
        }

        console.log(result);
    }

    printUniqueCharacters("incomprehensibilities");

}
/*
Level: MEDIUM (2pt per esercizio)
Ex 1: Array + algoritmi
crea un array di 6 numeri interi e stampa in console la differenza tra il numero di numeri maggiori di 10 e il numero di numeri inferiori a 1.
Inoltre, se il valore calcolato è pari a 0, stampa tutti i numeri dell'array in senso invertito, altrimenti, stampa solo il primo e l'ultimo numero dell'array.
*/
ex(6)
{

    const numbers = [5, 12, 13, -8, 15, 0];

    const greaterThanTen = numbers.filter(numero => numero > 10).length;
    const lowerThanOne = numbers.filter(numero => numero < 1).length;
    const differenceBetweenNumbers = greaterThanTen - lowerThanOne;
    console.log(differenceBetweenNumbers);

    if (differenceBetweenNumbers === 0) {
        console.log(`Reversed numbers :${numbers.reverse()}`);
    } else {
        console.log(`The first number is "${numbers[0]}", the last number is "${numbers[numbers.length - 1]}"`);
    }

}
/*
Ex 2: Array + funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso due set di 5 numeri e restituisce un oggetto. Questo oggetto avrà le seguenti proprietà:
winner -> avrà valore 1 se il primo set ha più proprietà del secondo, altrimenti 2, e 0 se hanno numero pari di proprietà

morePositive: avrà valore 1 se il primo set ha più numeri positivi (> 0) del secondo, altrimenti 2, e 0 se hanno numero pari di proprietà
chiama la funzione per stampare proprietà e valori dell'oggetto restituito
*/
ex(7)
{

    const firstSetNumbers = [1, 22, -31, 43, 57];
    const secondSetNumbers = [-1, 27, 39, -42, 53];

    function compareSetNumbers(set1, set2) {
        const result = {};

        if (Object.keys(set1).length > Object.keys(set2).length) {
            result.winner = 1;
        } else if (Object.keys(set1).length < Object.keys(set2).length) {
            result.winner = 2;
        } else {
            result.winner = 0;
        }

        const positiveSet1 = set1.filter(numero => numero > 0).length;
        const positiveSet2 = set2.filter(numero => numero > 0).length;

        if (positiveSet1 > positiveSet2) {
            result.morePositive = 1;
        } else if (positiveSet1 < positiveSet2) {
            result.morePositive = 2;
        } else {
            result.morePositive = 0;
        }

        return result;
    }


    const confronto = compareSetNumbers(firstSetNumbers, secondSetNumbers);
    console.log(confronto);

}
/*
Ex 3: Funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso 2 oggetti che rappresentano due rettangoli, che avranno questa struttura: {x: valore numerico, y: valore numerico}, e una stringa che può avere i seguenti valori:
- perimetro
- area
Se il terzo parametro ha valore 'perimetro' la funzione restituisce la differenza tra il perimetro del primo rettangolo e il perimetro del secondo rettangolo.
Se il terzo parametro ha valore 'area' la funzione restituisce la somma tra l'area del primo rettangolo e l'area del secondo rettangolo.
Ad esempio:
opeRettangolo( rect1, rect2, 'area' ) -> risultato opeRettangolo( rect1, rect2, 'perimetro' ) -> risultato
Chiama la funzione 2 volte per stampare i valori prodotti, usando valori a piacere.
*/
ex(8)
{

    const rect1 = { x: 5, y: 3 };
    const rect2 = { x: 4, y: 2 };


    function rectangleOperation(rect1, rect2, operation) {
        const firstArea = rect1.x * rect1.y;
        const secondArea = rect2.x * rect2.y;
        const firstPerimeter = 2 * (rect1.x + rect1.y);
        const secondPerimeter = 2 * (rect2.x + rect2.y);

        if (operation === 'area') {
            return firstArea + secondArea;
        } else if (operation === 'perimeter') {
            return firstPerimeter - secondPerimeter;
        } else {
            return 'Operazione non valida';
        }
    }
    const areaResult = rectangleOperation(rect1, rect2, 'area');
    const perimeterResult = rectangleOperation(rect1, rect2, 'perimeter');

    console.log(areaResult);
    console.log(perimeterResult);

}
/*
Ex 4: Funzioni di funzioni + algoritmi
Creare una funzione chiamata opeStringa che accetta 2 parametri:
- una stringa
- una funzione che prende in ingresso una stringa e restituisce una nuova stringa,
trasformata
La funzione opeStringa deve restituire la stringa prodotta dalla funzione passata come secondo parametro.
In fase di chiamata di opeStringa, operare nel seguente modo:
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la versione maiuscola
- chiamare opeStringa con una stringa "javascript" e una funzione che produca una stringa contenente solo i caratteri alla posizione dispari
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la stringa invertita
Ad esempio: s = javascript

opeStringa(s, uc) -> produce JAVASCRIPT opeStringa(s, odd) -> produce aacit opeStringa(s, invert) -> produce tpircsavaj
Stampare in output i risultati.
*/
ex(9)
{

    function opeStringa(string, transformation) {
        return transformation(string);
    }

    function uc(string) {
        return string.toUpperCase();
    }

    function odd(string) {
        let result = '';
        for (let i = 0; i < string.length; i++) {
            if (i % 2 === 0) {
                result += string[i];
            }
        }
        return result;
    }

    function invert(string) {
        return string.split('').reverse().join('');
    }

    const s = 'javascript';
    console.log(opeStringa(s, uc));
    console.log(opeStringa(s, odd));
    console.log(opeStringa(s, invert));

}
/*
Level: HARD (4pt per esercizio)
Ex 1
Dato il seguente JSON: [{
"autore": "mario rossi", "titolo": "jerry potter", "data": "1990-10-10"
}, {
}, {
}, {
},
"autore": "luigi verdi", "titolo": "la storia finita", "data": "1960-10-10"
"autore": "peach rosi", "titolo": "metti la cera", "data": "1970-10-10"
"autore": "mario rossi", "titolo": "togli la cerca", "data": "1980-10-10"

{
"autore": "luigi verdi",
"titolo": "mma kid",
"data": "1950-10-10" },
{
"autore": "lucia bianchi",
"titolo": "javascript non è java",
"data": "1940-10-10" },
{
"autore": "anna neri",
"titolo": "java non è javascript",
"data": "1930-10-10" }
]
che rappresenta un array di oggetti rappresentanti libri con le proprietà "titolo", "autore" e "data", scrivi una funzione che prenda in input l'array e restituisca un nuovo array di oggetti contenente solo i libri scritti da autori diversi, per evitare che ci siano nell'array oggetti con autori identici. L'array contiene quindi 1 libro per autore, il primo trovato nel parsing.
Dall'array prodotto dalla funzione stampare il libro più vecchio e il libro più recente.
*/
ex(10)
//L'ho fatto in italiano in quanto l'array era in italiano ed era più capibile
{

    const libri = [
        {
            "autore": "mario rossi",
            "titolo": "jerry potter",
            "data": "1990-10-10"
        },
        {
            "autore": "luigi verdi",
            "titolo": "la storia finita",
            "data": "1960-10-10"
        },
        {
            "autore": "peach rosi",
            "titolo": "metti la cera",
            "data": "1970-10-10"
        },
        {
            "autore": "mario rossi",
            "titolo": "togli la cerca",
            "data": "1980-10-10"
        },
        {
            "autore": "luigi verdi",
            "titolo": "mma kid",
            "data": "1950-10-10"
        },
        {
            "autore": "lucia bianchi",
            "titolo": "javascript non è java",
            "data": "1940-10-10"
        },
        {
            "autore": "anna neri",
            "titolo": "java non è javascript",
            "data": "1930-10-10"
        }
    ];

    function filtraLibri(arrayLibri) {
        const autoriUnici = [];
        const libriFiltrati = [];

        for (let i = 0; i < arrayLibri.length; i++) {
            const libro = arrayLibri[i];
            if (!autoriUnici.includes(libro.autore)) {
                autoriUnici.push(libro.autore);
                libriFiltrati.push(libro);
            }
        }
        return libriFiltrati;
    }


    const libriFiltrati = filtraLibri(libri);
    console.log(libriFiltrati);

    let libroPiuVecchio = libriFiltrati[0];
    for (let i = 1; i < libriFiltrati.length; i++) {
        if (libriFiltrati[i].data < libroPiuVecchio.data) {
            libroPiuVecchio = libriFiltrati[i];
        }
    }
    console.log("Libro più vecchio:", libroPiuVecchio);

    let libroPiuRecente = libriFiltrati[0];
    for (let i = 1; i < libriFiltrati.length; i++) {
        if (libriFiltrati[i].data > libroPiuRecente.data) {
            libroPiuRecente = libriFiltrati[i];
        }
    }

    console.log("Libro più recente:", libroPiuRecente);

}
/*
Level: DOM (Npt per esercizio) - OPZIONALE
Ex 1
Creare 3 campi input:
- il primo, stabilisce un colore di sfondo
- il secondo, stabilisce un colore di testo
- il terzo, stabilisce un contenuto
e un pulsante con testo "crea".
Al click sul pulsante, viene creato un div 200px x 200px che avrà sfondo, colore del testo e contenuto dettati dagli input digitati, come sopra descritto.
Ogni volta che viene premuto il pulsante "crea" l'elemento creato viene aggiunto al precedente.
*/



// Having missed this week's lectures, I had some doubts about this exercise, anyway I managed it by reviewing some pieces of lectures, only thing I created two separate files, one with input type="color" and one with input type="text".