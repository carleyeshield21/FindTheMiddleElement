// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme (triplet) {
    let newtriplet = new Array(...triplet)
    triplet.sort(function(a, b){return a-b})
    let mid = triplet[1]
    let index = []
    for(i=0; i<=newtriplet.length-1; i++){
        if(mid == newtriplet[i]){
            index.push(i)
        }
    }
    console.log(newtriplet)
    console.log(`index of middle element: ${index[0]}`)
}
gimme([2, 3, 1])
console.log('========')
gimme([-2, -3.2, 1])
console.log('========')
gimme([5, 10, 14])
console.log('========')
gimme([-5, -10, -14])