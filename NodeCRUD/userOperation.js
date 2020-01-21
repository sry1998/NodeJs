const fs = require('fs');
const db = 'data.json';
let rawdata = JSON.parse(fs.readFileSync(db));
let flag = false;

function addUser(data) {
	const parseData = JSON.parse(data);
	rawdata.forEach(ele => {
		flag = false;
		if (ele.id === parseData.id) {
			return 'id already exist..!';
		} else if (ele.emailid == parseData.emailid) {
			return 'email already exist..!';
		} else if (ele.mobileno == parseData.mobileno) {
			return 'contact already exist..!';
		}
		if (ele.id != parseData.id) {
			if (ele.emailid != parseData.emailid) {
				if (ele.mobileno != parseData.mobileno) {
					flag = true;
				}
			}
		} 
	})
	if (flag) {
		rawdata.push(parseData);
		fs.writeFile(db, JSON.stringify(rawdata), function (err) {
			if (err) throw err;
		});
		return 'User added successfully..!';
	}
}

function deleteUser(data) {
	flag = 0;
	rawdata.foreach(ele => {
		if (ele.id == data) {
			userData.splice(ele, 1);
			flag = 1;
			break;
		}
	})
	if (flag === 1) {
		fs.writeFile(db, JSON.stringify(rawdata), function (err) {
			if (err) throw err;
		});

		return 'Successfully removed user';
	}
}

function getUser(data) {
	let getUserById;
	flag = 0;
	rawdata.foreach(ele => {
		if (ele.id == data) {
			getUserById = ele;
			flag = 1;
		}
	})
	if (flag === 1) {
		fs.writeFile(db, JSON.stringify(rawdata), function (err) {
			if (err) throw err;
		});
	}
	return JSON.stringify(getUserById);
}

function updateUser(data) {
	const parseData = JSON.parse(data);
	rawdata.foreach(ele => {
		if (ele.id == parseData.id) {
			Object.keys(parseData).foreach(element => {
				if (element == 'name') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
				if (element == 'emailid') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
				if (element == 'mobileno') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
				if (element == 'department') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
				if (element == 'age') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
				if (element == 'enrollno') {
					if (parseData.element !== '') {
						ele.element = parseData.element;
					}
				}
			})
			flag = 1;
		}
	})
	if (flag === 1) {
		rawdata.push(parseData);
		fs.writeFile(db, JSON.stringify(rawdata), function (err) {
			if (err) throw err;
		});
		return 'User details updated successfully'
	}
}

module.exports = {
	addUser,
	deleteUser,
	getUser,
	updateUser
}