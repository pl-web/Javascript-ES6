// function foo(x, y) {
//   // y = y || "world" // × foo("hello", 0)
//   console.log(x, y)
// }
// foo("Hello", "Hi")

// function
function foo (x, y = "world") {
  console.log(x, y)
}
foo("hello")

function _ajax_ (url, {
  method = 'GET',
  header = {
    token: '',
    content: ''
  },
} = { }) {
  console.log(method)
}
_ajax_("https://www.pl") // false web

// function fuu(y = x) {
//   let x = 2
//   console.log(y) // error => x is not defined
// }
// fuu()

// anonymous function
console.log((new Function).name)  // anonymous

function foc() {
  console.log(this.H, this.He)
}
foc.bind({H: 1, He: 2})() // 1, 2