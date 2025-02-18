const dotenv = require('dotenv');
dotenv.config();
const Application = require("./framework/Application");
const PORT = process.env.PORT || 6969;
const controller = require('./src/controllers/date-controller');


 /**
 *   Start aplikacji zaczyna sie od tworzenia instancji  klasy Application oraz dodania routerów
 *   realizacja routingu jest bardzo prosta nie uwzglednione sa inne metody oprócz GET
 *   jest zastosowany EventEmiter gdzie rejestrujemy handlery z routra
 *   nie uwzględniono zarządzanie procesów na Cluster dla wykorzystania wszystkich rdzeni CPU
 **/

const app = new Application();

app.addRouter(controller);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
