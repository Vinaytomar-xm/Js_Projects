// const no = new Number(100)
// const rev_no = no.toString().split('').reverse().join('')
// console.log(rev_no)
// // convert string to number

// const num = Number(rev_no)
// console.log(num)

// const str = no.toString().charAt(1)
// console.log(str)

// const name = "Vinay"
// const countName = name.indexOf('a')
// console.log(countName)



// const PromiseOne = new Promise(function (resolve, reject) {
//     resolve('resolved')
// })

// PromiseOne.then((res)=>{
//     console.log('done')
//     return res
// }).then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


// async function promiseOne(res){
//     try {
//         const result = await PromiseOne
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// promiseOne()


// async function getData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let result = await res.json()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     let resp = res.json()
//     return resp
// }).then((username)=>{
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
// })



// const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// // console.log(discriptor);


// const user = {
//     username: "Vinay",
//     email: "Vinay@googlr.com",
//     age: "19"
// }

// Object.defineProperty(user, "username", {
//     writable: false,
//     enumerable: true,
//     configurable: false
// })

// user.username = "tomar"

// const userObj = Object.getOwnPropertyDescriptor(user, "username")
// // console.log(userObj);

// // console.log(user);


// let userName = "Vinay     "

// String.prototype.trulength = function() {
//     console.log(`${this.trim().length}`);
//     console.log(`${this}`);

// }

// userName.trulength()


// class user {
//     constructor(username, email, company){
//         this.username = username
//         this.email = email
//         this.mobile = company
//     }

//     login(){
//        return `Welcome ${this.username}`
//     }
// }

// const printme = new user("Vinay", "tomar@google.com", "Google")
// console.log(printme);


// behind the scene 

// function user(username, email, company) {
//     this.username = username
//     this.email = email
//     this.company = company

// }

// user.prototype.login = function(){
//     return `Hey ${this.username} welcome to ${this.company}`
// }

// const PrintMe = new user("Vinay", 'tomar@google.com', "google")
// console.log(PrintMe.login());


// class user {
//     constructor(username){
//         this.username = username
//     }
// }

// class student extends user{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }

//     wlcm(){
//         return `hey ${this.username} this is your mail id ${this.email}`
//     }
// }

// const printInfo = new student("Vinay", "Vinay@microsoft.com")
// console.log(printInfo.wlcm());


// behind the scene of super 

// function user(username){
//     this.username = username
// }

// function student(username,email, company){
//     user.call(this, username)
//     this.email = email
//     this.company = company
// }

// const info = new student("Vinay", "Vinay@amazon.com", "Amazon")

// console.log(info);


// getter/setter through class

// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     get username(){
//         return `hey how are you ${this._username.toUpperCase()}`
//     }
//     set username(value){
//         this._username = value
//     }
// }

// const deatials = new user("Vinay")
// console.log(deatials.username);


// getter/setter through function mean behind the scene

// function user(username, email, password) {
//     this._username = username
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, 'username',{
//         get: function(){
//             return ` hey nice to meet you ${this._username.toUpperCase()}`
//         },
//         set: function(value){
//             this._username = value
//         }
//     })
// }
// const detail = new user("Vinay")
// console.log(detail.username);


// getter/setter htrough Objects rarely seenn it 

// const user = {
//     _username : "Vinay",
//     _email : "Vinay@google.com",

//     get username(){
//         return `hello ${this._username.toUpperCase()}`
//     },
//     set username(value){
//         this._username = value
//     }
// }

// const details = Object.create(user)
// console.log(details.username);
