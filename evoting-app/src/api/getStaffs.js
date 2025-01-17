

export default async function getStaffs() {

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/staffs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch staff data');
        }

        const staffList = await response.json();
        return staffList;

    } catch (error) {
        console.error('Error fetching staff:', error.message);
    }
}
