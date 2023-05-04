
fetch('http://localhost:3333/items')
.then(res=>{
  return res.json()
})
.then(resJson=>{
    //let fact = resJson[0];
    for (let itm  of resJson) {
        let node = document.createElement("h2");
        node.innerHTML = itm['itemname'];
        document.querySelector('body').appendChild(node)
        //console.log(itm);
        // console.log(itm['itemname'])
}})
.catch(err => console.log(err))