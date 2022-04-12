let arrObj = [
    { name: "Shwe", age: 27 },
    { name: "saru", age: 24 },
    { name: "sona", age: 24 },
    { name: "sup", age: 26 },
  ]; // ['Shantanu','Vignesh','Priya', 'Goutham']
let data=arrObj.map(function(ele)
{
    return ele.name;
})
console.log(data);


