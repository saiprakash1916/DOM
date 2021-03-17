let num = [10, 20, 50, 200, 40, 500, 30];
let result = num.find(a => a > 50);
console.log(result);
let users = ["sai", "prakash", "sp", "pradeep"];
let Findsp = users.find(find => {
  if (find === "sp") {
    return find;
  }
});
console.log(Findsp);

let userObject = [
  { trainer: "shasai", course: "javaScaript" },
  { trainer: "shishira", course: "java" },
  { trainer: "raghu", course: "c/c++" },
  { trainer: "varun", course: "sql" },
];
let FindRaghu = userObject.find(find => find.trainer === "raghu");
console.log(FindRaghu);
let FindRaghu = userObject.findIndex(find => find.trainer === "raghu");
console.log(FindRaghu);
