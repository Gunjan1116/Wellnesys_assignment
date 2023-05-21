let express = require("express");
let fs = require("fs");
let userRoute = express.Router();

userRoute.post('/', (req, res) => {
    const { name, email, age, gender, city } = req.body;

    const users = getUsersFromFile();

    //Checking user already exist or not
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            flag = true;
            break;
        }
    }
    if (flag) {
        return res.status(409).json({ "message": 'User information already saved.' });
    }

    //Finding maximum value of id
    let maximumId = -Infinity;
    users.forEach((el) => {
        if (el.id > maximumId) {
            maximumId = el.id;
        }
    })

    const user = {
        id: maximumId + 1,
        name,
        email,
        age,
        gender,
        city
    }

    users.push(user);
    saveUsersToFile(users);

    res.status(201).json({ "message": 'User information saved successfully.' });
});

userRoute.get('/', (req, res) => {
    const users = getUsersFromFile();

    res.status(200).json({"allUsers":users});
});

//Function to get all users
function getUsersFromFile() {
    try {
        const usersData = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
        return usersData;
    } catch (err) {
        console.log('Error reading users file:', err);
        return [];
    }
}

//Function to save new user
function saveUsersToFile(users) {
    try {
        fs.writeFileSync('./users.json', JSON.stringify(users, null, 2), 'utf8');
    } catch (err) {
        console.log('Error writing users file:', err);
    }
}

module.exports = {
    userRoute
}