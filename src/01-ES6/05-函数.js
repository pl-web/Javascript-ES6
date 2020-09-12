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

