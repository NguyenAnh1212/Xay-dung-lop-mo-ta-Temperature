// Tạo lớp.
class Temperature {
    constructor(celsius) {
        this.celsius= celsius;
    }
    getFahrenheit(){
        return 1.8*this.celsius+32;
    }
    getKelvin(){
        return this.celsius+273.15;
    }
}
// Khởi tạo đối tượng.
let hotMax = new Temperature(45);
let a = hotMax.getKelvin();
let b = hotMax.getFahrenheit();
alert("Tôi chỉ chịu được "+ a +"Kelvin, tương ứng "+b +" độ F.");