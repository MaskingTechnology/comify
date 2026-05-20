
db = db.getSiblingDB('comify');
db.tenant.insertOne({
    _id: 'localhost',
    origins: [
        'http://localhost:3000',
        'http://localhost:5173'
    ]
});
