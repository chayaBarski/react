import axios from "axios";
const  url = "http://localhost:5258/api/Product";
export async function getAllProducts() {
 try {
    let res = await axios.get(`${url}/Producs`)
    console.log(res.data);
    return res.data
  }
  catch (err) {
    return err
  }
       

}
export async  function saveOneProduct(n,p,c,d) {
    
    try {
        let res = await axios.post(`${url}/saveProduct`, { name: n, price: p, count: c, idDeparment: d })
        return res;
      }
      catch (e) {
        return e;
      }
    

}
export async function deletOneProduct(p){
    try {
        let res = await axios.delete(`${url}/deleteProdu/${p.id}`)
        return res
      }
      catch (e) {
        return e;
      }
    
}
export async function editOneProducr(i,n,p,c,d){

     try {
        let res = await axios.put(`${url}/editProducr`,{ id: i, name: n, price: p, count: c, idDeparment: d });
        return res
      }
      catch (e) {
        return e;
      }
    
     
}