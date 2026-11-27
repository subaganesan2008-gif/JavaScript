/*the push() method as the name suggests,pushes the specified elementor(or elements)to the end of an array*/
const vehicles=["car","blue","truck"]
/*push method adds the elements at the end*/
vehicles.push("bus","cycle","aeroplane","SUV","van")
console.log(vehicles)
/*pop method removes the last element of an array*/
vehicles.pop()
console.log(vehicles)
/*shift method removes the first element of an array*/
vehicles.shift();
console.log(vehicles)
/* */
console.log(vehicles.indexOf("truck"))
console.log(vehicles.indexOf("train"))
vehicles.splice(4)
console.log(vehicles)

console.log(typeof vehicles)