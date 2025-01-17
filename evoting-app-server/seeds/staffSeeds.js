const mongoose = require('mongoose')
const Staff = require('../models/Staff')

const sampleStaff = [
    // COMELECT
    ...Array(5).fill(null).map((_, index) => ({
        role: 'COMELECT',
        name: `John Doe ${index + 1}`,
        age: 25 + index,
        email: `john${index + 1}.doe@vote.com`,
        contactNumber: `202-555-${1000 + index}`,
        address: `25${index} Comelect St., Manila, Philippines`
    })),

    // Poll Workers
    ...Array(5).fill(null).map((_, index) => ({
        role: 'Poll Worker',
        name: `Emily Parker ${index + 1}`,
        age: 25 + index,
        email: `emily${index + 1}.parker@vote.com`,
        contactNumber: `202-555-${1000 + index}`,
        address: `25${index} Polling St., Manila, Philippines`
    })),
    
    // Election Observers
    ...Array(5).fill(null).map((_, index) => ({
        role: 'Election Observer',
        name: `David Carter ${index + 1}`,
        age: 30 + index,
        email: `david.carter${index + 1}@election.com`,
        contactNumber: `312-555-${2000 + index}`,
        address: `47${index} Observer St., Manila, Philippines`
    })),
    
    // Media
    ...Array(5).fill(null).map((_, index) => ({
        role: 'Media',
        name: `Sarah Mitchell ${index + 1}`,
        age: 22 + index,
        email: `sarah.mitchell${index + 1}@news.com`,
        contactNumber: `415-555-${3000 + index}`,
        address: `18${index} Media St., Manila, Philippines`
    })),
    
    // Law Enforcement
    ...Array(5).fill(null).map((_, index) => ({
        role: 'Law Enforcement',
        name: `James White ${index + 1}`,
        age: 35 + index,
        email: `james.white${index + 1}@police.com`,
        contactNumber: `718-555-${4000 + index}`,
        address: `12${index} Law St., Manila, Philippines`
    }))
];

const seedData = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/evoting-app');
        console.log('Database connected successfully');

        await Staff.deleteMany({});
        console.log('Existing staff data deleted');

        const result = await Staff.insertMany(sampleStaff);
        console.log(`${result.length} staff members inserted successfully.`);

    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.connection.close();
        console.log('Database connection closed');
    }
};

seedData();
