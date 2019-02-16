let db;
try {
    db = { connection: true, };
}
catch (e) {
    console.log(e);
}

console.log(db);