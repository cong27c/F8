//Bài tập về nhà K11 + K12 Buổi 22
const data = [];
const handleRegister = function(name, password, email) {
    const in4User = {name, password, email, role:"user"}
    if(name && password && email) {
        return data.push(in4User) 
    } else  
    return "Lỗi đăng ký vui lòng đăng ký lại"
}
const handleLogin = function(email, password) {
    for(let value of data) {
        if(value.email === email && value.password === password)
            return value 
    }
    return "Thông tin đăng nhập không hợp lệ"
}
handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com")
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com")
console.log(data);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
