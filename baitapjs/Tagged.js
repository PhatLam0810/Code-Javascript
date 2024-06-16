function highlight ([first,...strings], ...values){
   return values.reduce(
    (acc,curr) => [...acc,`${curr}`,strings.shift()],
    [first]
   )
   .join('')
}

var brand = ['F8','F7']
var course = ['Javascript','PHP']
var price = [10000,20000]

const html =highlight`Học lập trình ${course} tại ${brand} với giá ${price} đồng`
console.log(html);