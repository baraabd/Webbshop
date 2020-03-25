# Webbshop
En objekt-orienterad back-end webbshop applikation i PHP som är kopplad till en MySQL databas. Backend skall innehålla ett API som skall användas för kommunikationen med databasen.


ADMIN- delen: Se: Uppdaterad Gruppkontrakt. 

• Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen. Har jag uppfyllt kravet: Ja, Hur har Jag uppfyllt kravet: Genum en function som heter signUpSubmit(event) (signupJS.js rad 8 ), Det här funktionen är tillåt användare som kan registrera som  kunder eller admin, och  admin väntar på aktivering från en tidigare admin.

• Man ska kunna logga in som administratör i systemet. Har jag uppfyllt kravet: Ja, Hur har jag uppfyllt kravet: Genum en function som heter login() (loginJS.js rad 19), Det finns IF statement, som tar resultaten från funktionen , om resultatet är identiskt, kommer det att gå till den Admin sidan.

• En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången. Har jag uppfyllt kravet: Ja, Hur har jag uppfyllt kravet: Och det är via Admin sidan , i Manage Admin, där alla användare som väntar på aktivering visas i det här avsnittet.

• Administratörer ska kunna redigera vilka kategorier en produkt tillhör. Har jag uppfyllt kravet: Ja, Hur har jag uppfyllt kravet: Och det är via Admin sidan , i Delete/Update Category avsnitt, där alla category kan ändras eller tas bort, men det får inte tars bort categorier om de är länkade till produkter- eller order.

• Administratörer ska kunna lägga till och ta bort produkter. Har jag uppfyllt kravet: Ja, Hur har jag uppfyllt kravet: Och det är via Admin sidan , i Delete/Update Produkter avsnitt, där alla produkter kan ändras eller tas bort, men det får inte tars bort produkter om de är länkade till category- eller order.

• Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan. Har jag uppfyllt kravet: Ja, Hur har jag uppfyllt kravet: Genum Admin sidan , i Delete/Update Produkter avsnitt, där alla produkter kan updaterats antalet det, och genum koden det jag har skapat en knap som heter (update), där kan admin ändra antalet av produkter i (admin.js rad 216) och det här koden går till andra funktion  som heter  (updateProduct) ( i admin.js rad 222), När denna kod söker efter det produktnummer som vi vill uppdatera antalet produkter för och när resultatet erhålls uppdaterar det antalet produkter.

• Administratörer ska kunna se en lista på alla gjorda beställningar. Har jag uppfyllt kravet: Ja Hur har jag uppfyllt kravet: Genum Admin sidan , i Order avsnitt, där alla order kan visass samt order detailer, genum att trycka på show kanpp, genum koden det jag har skapat en knap som heter (show), där kan admin vissas order detailer i (admin.js rad 712) och det här koden går till andra funktion  som heter  (getOrderDetails) ( i admin.js rad 717), Där denna kod söker efter det orderId som admin vill vissas detailer av order, i sin tur visar det orderdetailer.

• Administratörer ska kunna markera beställningar som skickade. Har jag uppfyllt kravet: Ja Hur har jag uppfyllt kravet: Genum Admin sidan , i Order avsnitt, där alla order kan markera produkter som skickade , genum att trycka på (Send) kanpp, genum koden det jag har skapat en knap som heter (Send), där kan koden markera produkter i (admin.js rad 722) och det här koden går till andra funktion  som heter  (sendOrder) ( i admin.js rad 727), Där denna kod updatera produkter som skickade.

• Administratörer ska kunna se en lista över personer som vill ha nyhetsbrevet och deras epost adresser. Har jag uppfyllt kravet: Jag Hur har jag uppfyllt kravet: där visas all data av kunder som vill prenumerera på nyhetbrev. Genum koden jag har skapat funktionene som heter ( getAllNewsletters ) i (admin.js rad 631) detta kan vissas alla kunder som vill nyhetbrev.



CUSTOMER- delen: Se: Uppdaterad Gruppkontrakt.

CUSTOMER

• En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Genom en funktion som hämtar saldot och uppdaterar det nya saldot i databasen. (orderHandler.php rad. 53) • Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i session på servern. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Cartlistan sparas i session.Storage.

• När besökare gör en beställning ska hen få ett lösenord till sidan där man kan logga in som kund. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Besökaren får ett random lösenord innan hen checkar ut sina varor. Som kan användas när besökaren registrerar sig som kund på signupUser sidan. Math.random funktion. (cartJS.js rad.150) • När man gör en beställning ska man också få chansen att skriva upp sig för nyhetsbrevet. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Det går att skriva upp sig för nyhetsbrev på cart sidan längst ner som besökare och som användare. Som användare fylls alla columner i databasen, tabellen user. Som besökare fylls ett null-värde i columnen för userId.

• När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte. Har vi uppfyllt kravet: Nej Hur har vi uppfyllt kravet: Eftersom denna funktion är för admin att utföra till mypages har vi inte tillämpat denna. • Besökare ska kunna välja ett av flera fraktalternativ. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Tre olika fraktalternativ hämtas från databasen, när kunden checkar ut registreras det valda fraktalternativet och datum räknas ut i funktionen, som skickas med i ordern som skapas och sparas i databasen. (cartJS.js rad. 92) • Som inloggad kund ska man kunna markera sin beställning som mottagen. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Funktion till att uppdatera databasen är utvecklad i (orderHandler.php rad. 43) och det sker en förfrågan i orderReciver.php, där funktionen i mypagesJS.js tar emot den och skickar svaret.

GENERALLY

• Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera. Har vi uppfyllt kravet: Ja. Hur har vi uppfyllt kravet: Vi har fyra kategorier på sidan varav, Products innehåller samtliga produkter och de resterande kategorierna innehåller sina specifika produkter. Vi har även i vår databas en tabell category_details för att samma produkt ska kunna finnas i flera kategorier. • Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori. Har vi uppfyllt krav



