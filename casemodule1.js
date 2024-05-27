class Classstudent {
    constructor(fullname, email, phone, address, birthday, gender) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
    }
    getFullname() {
        return this.fullname;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }


}
let student1 = new Classstudent("Nguyễn Văn A", "nguyenvana@gmail.com", +8417927334, "Hà Nội", "2003-12-01", "Nam",)
let student2 = new Classstudent("Trần Văn B", "tranvanb@gmail.com", +8413712898, "Hải Phòng", "2001-03-24", "Nam",)
let student3 = new Classstudent("Lê Thị C", "lethic@gmail.com",+8413822422, "Nam Định", "1998-10-15", "Nữ",)

let students = [student1, student2, student3];
function display() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('date').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    let tableContent= ` <tr>
           <th>STT</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Tuỳ chọn</th>
        </tr>`;
    for (let i = 0; i < students.length; i++) {
        tableContent += ` <tr>
            <td>${i + 1}</td>
            <td>${students[i].fullname}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].address}</td>
            <td>${students[i].birthday}</td>
            <td>${students[i].gender}</td>
            <td>
                <button onclick="editStudent(${i})" >sửa</button>
                <button onclick="deleteStudent(${i})">Xóa</button>
            </td>
        </tr>`;
    }
    document.getElementById('list-students').innerHTML = tableContent;
}
display();

function deleteStudent(index) {
    let check = confirm("bạn có chắc muốn xóa STT " + (index + 1))
    if (check) {
        students.splice(index, 1);
        display();
    }else alert("Bạn đã không xoá STT" + (index + 1));

}

function editStudent(index) {
    editingIndex = index;
    let student = students[index];
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('email').value = student.email;
    document.getElementById('phone').value = student.phone;
    document.getElementById('address').value = student.address;
    document.getElementById('date').value = student.birthday;
    if (student.gender === 'Nam') {
        document.getElementById('male').checked = true;
    } else {
        document.getElementById('female').checked = true;
    }
    document.getElementById('save').innerText = 'Cập nhật';
}
function checkInputs() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (fullname === '' || email === '' || phone === '' || address === '' || birthday === '' || gender === "") {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
    return true;
}
let editingIndex = -1;
function save() {
    if (!checkInputs()) {
        return;
    }
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('date').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    if (editingIndex === -1) {
        let student = new Classstudent(fullname, email, phone, address, birthday, gender);
        students.push(student);
    } else {
        let student = students[editingIndex];
        student.fullname = fullname;
        student.email = email;
        student.phone = phone;
        student.address = address;
        student.birthday = birthday;
        student.gender = gender;

        editingIndex = -1;
        document.getElementById('save').innerText = 'Thêm';
    }
    display();
    clear();
}
function clear() {
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('date').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
}


