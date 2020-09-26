class User{
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  showName() {
    console.log(this.name);
  }
  showPassword() {
    console.log(this.password);
  }

}
class VipUser extends User {
  constructor(name, password, level) {
    super(name, password);
    this.level = level;
  }
  showLevel() {
    console.log(this.level);
  }
}
const vip_u01 = new VipUser("pp", "123456", "2");
console.log(vip_u01);