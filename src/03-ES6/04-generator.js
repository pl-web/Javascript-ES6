const foo = function* () {
  alert('step 1')
  yield
  alert('step 2')
}

let geneObj = foo()

geneObj.next()
geneObj.next()

