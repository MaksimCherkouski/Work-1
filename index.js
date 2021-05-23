///************** 1 task ***************/
let object = {
  username: "Maksim",
  age: "24",
};

function convertObject(obj) {
  for (let key in obj) {
    let keyNew = obj[key];
    obj[keyNew] = key;
    delete obj[key];
  }
  return obj;
}
console.log(convertObject(object));

//**************** 2 task ***************/

let object2 = {
  x: 1,
  y: 9,
  c: 10,
};

function isEvenValue(obj) {
  for (let key in obj) {
    if (obj[key] % 2 == 0) {
      return true;
    }
  }
  return false;
}
console.log(isEvenValue(object2));
//***************  задание из презентации */

let tree = {
  name: "iva",
  height: 5,
  leaves: 20,
  family: "iva",
};
console.log(tree);
let a = prompt("на сколько укорить дерево");
tree.height -= a;
console.log(tree);

//*** */

let object = {
  name: "Maksim",

  getName: function (str) {
    this.name = str;
    console.log(`My name ${this.name}`);
  },
  getTel: function (str) {
    this.tel = str;
    console.log(`My phone ${this.tel}`);
  },
  getMail: function (str) {
    this.mail = str;
    console.log(`My mail ${this.mail}`);
  },
};
object.getName("max");
object.getTel(375256978689);
object.getMail("375293629410@mail.ru");
