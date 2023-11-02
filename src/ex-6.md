###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Man kan använda båda två på och gör nästan samma sak men skillnader mellan de är att typer är stängda och interrfaces är öppen för ändringar eller addering att koden, det vill säga att typer tillåter vara den som står på koden och lämnar inte att variabler skapad kan använda intelängre, medan interfaces tillåter det. 

//Interface

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// Här adderar man flera data till existing variablen "Window" //


//Typer//


type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.

//Här skulle vi få en kompileringsproblem för att försöka att addera elelr skapa en variablen som redan finns//
