const NormalQuene = require("./NormalQuene");
const CycleQuene = require("./CycleQuene");

// const normalQuene = new NormalQuene(5);

// normalQuene.put(1);
// normalQuene.put(2);
// normalQuene.display();

// normalQuene.pop();
// normalQuene.display();

// normalQuene.put(3);
// normalQuene.put(4);
// normalQuene.put(5);
// normalQuene.put(6);
// normalQuene.display();

const cycleQuene = new CycleQuene(5);

cycleQuene.put(1);
cycleQuene.put(2);
cycleQuene.display();

cycleQuene.pop();
cycleQuene.display();

cycleQuene.put(3);
cycleQuene.put(4);
cycleQuene.put(5);
cycleQuene.put(6);
cycleQuene.display();
