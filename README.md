# Webbshop Enjoy
En objekt-orienterad back-end webbshop applikation i PHP som är kopplad till en MySQL databas. Backend skall innehålla ett API som skall användas för kommunikationen med databasen.

Team 2: Enjoy
Medlemmar: Anu, Bara, Essa, Rasmus och Yanica
Lite info:
Tillgång till MAMP server och MySQL server, importera vår databas, enjoy.sql filen som är bifogad i inlämningen.
Inga inloggningsuppgifter behövs, skapar ditt eget lösenord eller alternativt lösenordet som du får från cartsidan när du gör beställning utan att vara användare. Du hänvisas vidare med hjälp av alert på sidorna. Iconer och Enjoy-loggan länkar till olika sidor.

OBS: Readme filen ska framförallt innehålla en lista över alla kraven i kravspecen nedanför samt
en kort kommentar från er - har ni uppfyllt kravet? I så fall, hur?

ADMIN- delen: Se: Uppdaterad Gruppkontrakt.
• Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• Man ska kunna logga in som administratör i systemet.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR

• Administratörer ska kunna redigera vilka kategorier en produkt tillhör.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• Administratörer ska kunna lägga till och ta bort produkter.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR

• Administratörer ska kunna se en lista på alla gjorda beställningar.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• Administratörer ska kunna markera beställningar som skickade.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR

• Administratörer ska kunna se en lista över personer som vill ha nyhetsbrevet och deras epost adresser.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR
• Administratörer ska kunna skicka nyhetsbrev från sitt gränssnitt, nyhetsbrevet ska sparas i databasen samt innehålla en titel och text.
Har vi uppfyllt kravet: SVAR
Hur har vi uppfyllt kravet: SVAR


CUSTOMER

• En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Genom en funktion som hämtar saldot och uppdaterar det nya saldot i databasen. (orderHandler.php rad. 53)
• Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i session på servern.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Cartlistan sparas i session.Storage.

• När besökare gör en beställning ska hen få ett lösenord till sidan där man kan logga in som kund.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Besökaren får ett random lösenord innan hen checkar ut sina varor. Som kan användas när besökaren registrerar sig som kund på signupUser sidan. Math.random funktion. (cartJS.js rad.150)
• När man gör en beställning ska man också få chansen att skriva upp sig för nyhetsbrevet.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Det går att skriva upp sig för nyhetsbrev på cart sidan längst ner som besökare och som användare. Som användare fylls alla columner i databasen, tabellen user. Som besökare fylls ett null-värde i columnen för userId.

• När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte.
Har vi uppfyllt kravet: Nej
Hur har vi uppfyllt kravet: Eftersom denna funktion är för admin att utföra till mypages har vi inte tillämpat denna.
• Besökare ska kunna välja ett av flera fraktalternativ.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Tre olika fraktalternativ hämtas från databasen, när kunden checkar ut registreras det valda fraktalternativet och datum räknas ut i funktionen, som skickas med i ordern som skapas och sparas i databasen. (cartJS.js rad. 92)
• Som inloggad kund ska man kunna markera sin beställning som mottagen.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet:  Funktion till att uppdatera databasen är utvecklad i (orderHandler.php rad. 43) och det sker en förfrågan i orderReciver.php, där funktionen i mypagesJS.js tar emot den och skickar svaret.


GENERALLY

• Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har fyra kategorier på sidan varav, Products innehåller samtliga produkter och de resterande kategorierna innehåller sina specifika produkter. Vi har även i vår databas en tabell category_details för att samma produkt ska kunna finnas i flera kategorier.
• Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi hämtar alla produkter från databasen till vår startsida, klickar man på en kategori hämtas den kategoriens produkter från databasen. Vill man se alla produkter igen klickar man på Products.
• Man ska från hemsidan kunna skriva upp sig för att få butikens nyhetsbrev genom att ange sitt namn och epostadress.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet:  Det går att skriva upp sig för nyhetsbrev på start sidan längst ner som besökare och som användare. Som användare fylls alla columner i databasen, tabellen user. Som besökare fylls ett null-värde i columnen för userId.

• Inga Lösenord får sparas i klartext i databasen.
Har vi uppfyllt kravet: JA
Hur har vi uppfyllt kravet: När man registrerar sig på signupUser sidan har vi hashat lösenordet. (userReciver.php)
• All data som programmet utnyttjar ska vara sparat i en MYSQL databas (produkter, beställningar, konton mm).
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har lagt in all information i databasen som behöver hämtas till sidan och använt oss utav det på sidan, även för att skicka tillbaka information från sidan som registreras i databasen.
• Tillgängliga fraktalternativ ska vara hämtade från databasen.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har lagt till tillgängliga fraktalternativ i databasen med ett id och när användaren gör en beställning skickas detta id med i orden på cart sidan. (cartJS.js rad. 134)

• Alla sidor skall vara responsiva.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har använt media query och genom att ha ett responsivt läge på webbläsaren fått till att all information från sidan syns för mobilanpassat och även som tablet.
• Skapa ett konceptuellt ER diagram, detta ska lämnas in vid idégodkännandet.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har skapat en konceptuellt ER-diagram, ett fysikt normaliserat ER-Diagram och ett Klass-Diagram.
• Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har skrivit textbaserad idé beskriving av vår Webbshop, Enjoy.
• Arbetet ska implementeras med objektorienterade principer.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har använt oss av en väl strukturerad mapp konstruktion för vårt projekt inkl. flertal class, handler och receiver.php sidor för respektive förfrågningar.
• Det ska finnas ett normaliserat diagram över databasen i gitrepot.
Har vi uppfyllt kravet: Ja.
Hur har vi uppfyllt kravet: Vi har lagt in en fil till gitrepot som innehåller vårt fysiska diagram.

