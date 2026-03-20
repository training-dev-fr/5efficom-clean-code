import Banque from "./Banque.js";
import DAB from "./DAB.js";

let DAB1 = new DAB("Lille");
let DAB2 = new DAB("Tourcoing");

let banque = new Banque([DAB1,DAB2]);

DAB1.withdraw(500);
DAB2.withdraw(250);
DAB1.deposite(100);
