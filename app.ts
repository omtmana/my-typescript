function add_num(n1: number, n2: number) {
   return n1 + n2
}

let num1 = 5
let num2 = 2.8

const final_result = add_num(num1, num2)
console.log(final_result)

function combine_nums(n1: number, n2: number) {
   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error('Incorrect Input')
   }
   return n1 + n2
}

let nums1 = 5
let nums2 = 2.8

const total = combine_nums(nums1, nums2)
console.log(total)