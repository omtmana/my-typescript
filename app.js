function add_num(n1, n2) {
    return n1 + n2;
}
var num1 = 5;
var num2 = 2.8;
var final_result = add_num(num1, num2);
console.log(final_result);
function combine_nums(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect Input');
    }
    return n1 + n2;
}
var nums1 = 5;
var nums2 = 2.8;
var total = combine_nums(nums1, nums2);
console.log(total);
