
db = db.getSiblingDB('comify');
db.tenant.updateOne(
    { _id: 'localhost' },
    {
        $set: {
            origins: [
                'http://localhost:3000',
                'http://localhost:5173'
            ]
        }
    },
    { upsert: true }
);
