import axios from "axios";
const url = "http://localhost:5258/api/Department";
export async function getAllDeparment() {
  try {
    let res = await axios.get(`${url}/GetAlldepartment`)
    console.log(res.data);
    return res.data
  }
  catch (err) {
    return err
  }
}
export async function saveOneDeparment(d) {
  try {
    let res = await axios.post(`${url}/saveDeparment`, d)
    return res;
  }
  catch (e) {
    return e;
  }


}
export async function deletOneDeparment(d) {
  try {
    let res = await axios.delete(`${url}/deleteDeparment/${d.id}`)
    return res
  }
  catch (e) {
    return e;
  }

}
export async function editOneDeparment(i, n, d) {
  let deparment = { id: i, name: n, descreption: d }
  try {
    let res = await axios.put(`${url}/editDeparment`,deparment);
    return res
  }
  catch (e) {
    return e;
  }

}