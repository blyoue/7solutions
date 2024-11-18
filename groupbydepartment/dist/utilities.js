export const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
};
export const transformData = (users) => {
    let departments = {};
    users.forEach((user) => {
        // New Department
        let thisDepartment = departments[user.company.department];
        if (!thisDepartment) {
            thisDepartment = {
                male: 0,
                female: 0,
                ageRange: '',
                hair: {},
                addressUser: {},
            };
            departments[user.company.department] = thisDepartment;
        }
        // Gender
        user.gender === 'male' ? thisDepartment.male += 1 : thisDepartment.female += 1;
        // Age
        if (thisDepartment.ageRange) {
            const [oldMin, oldMax] = [Number(thisDepartment.ageRange.split('-')[0]), Number(thisDepartment.ageRange.split('-')[1])];
            const newMin = Math.min(oldMin, user.age);
            const newMax = Math.max(oldMax, user.age);
            thisDepartment.ageRange = `${newMin}-${newMax}`;
        }
        else {
            thisDepartment.ageRange = `${user.age}-${user.age}`;
        }
        // Hair
        if (!thisDepartment.hair[user.hair.color]) {
            thisDepartment.hair[user.hair.color] = 1;
        }
        else {
            thisDepartment.hair[user.hair.color] += 1;
        }
        //AddressUser
        thisDepartment.addressUser[`${user.firstName}${user.lastName}`] = user.address.postalCode;
    });
    return departments;
};
