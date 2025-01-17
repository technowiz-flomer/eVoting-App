const Staff = require('../models/Staff');

roles = ["COMELECT", "Poll Workers", "Election Observers", "Media", "Law Enforcement"]

// Create Staff
const createStaff = async (req, res) => {
    const { role, name, age, email, contact, address } = req.body;

    if (!role || !name || !age) {
        return res.status(400).json({ message: 'Role, name, and age are required.' });
    }

    if (!roles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role provided.' });
    }

    try {
        const staffExists = await Staff.findOne({ role, name });
        if (staffExists) {
            return res.status(400).json({ message: 'Staff member already exists with this role and name.' });
        }

        const newStaff = await Staff.create({ role, name, age, email, contact, address });
        
        return res.status(201).json({
            _id: newStaff.id,
            role: newStaff.role,
            name: newStaff.name,
            age: newStaff.age,
            email: newStaff.email,
            contactNumber: newStaff.contactNumber,
            address: newStaff.address
        });

    } catch (error) {
        console.error('Error creating staff:', error);
        return res.status(500).json({ message: 'An error occurred while creating staff. Please try again later.' });
    }
};

// List Staffs
const getStaffs = async (req, res) => {
    try {
        const staffList = await Staff.find();

        if (staffList.length === 0) {
            return res.status(404).json({ message: `No staff found with the role ${role}.` });
        }

        return res.status(200).json(staffList.map(staff => ({
            _id: staff.id,
            role: staff.role,
            name: staff.name,
            age: staff.age,
            email: staff.email,
            contactNumber: staff.contactNumber,
            address: staff.address
        })));
    } catch (error) {
        console.error('Error fetching staff by role:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving staff. Please try again later.' });
    }
};

// Update Staff
// Delete Staff

module.exports = { createStaff, getStaffs};
