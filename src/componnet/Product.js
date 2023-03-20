import { useState ,useEffect} from "react";
import { Select, Input, Button,Form } from 'semantic-ui-react';
import { getAllDeparment, saveOneDeparment, deletOneDeparment, editOneDeparment } from '../service/deparment';
import { getAllProducts, saveOneProduct, deletOneProduct, editOneProducr } from '../service/Producrs';
function Product(props) {
  const [ListP, setListP] = useState();
  const [ListD, setListD] = useState();
  const [Name, setName] = useState(props.name);
  const [Price, setPrice] = useState(props.price);
  const [Count, setCount] = useState(props.Count);
  const [IDDepartemnt, setiDDepartment] = useState(props.idDeparment);
  const [Departemnt, setDepartment] = useState(props.deparment);
  const D = ListD.map((d, i) => {
    return ({ key: d.id, value: d.id, text: d.name })
  });
  // const start=()=>{
  //   setName(props.name);
  //   setCount(props.count);
  //   setPrice(props.Price);
  //   setiDDepartment(props.idDeparment);
  //   setDepartment(props.deparment)
  // }
  useEffect(() => {
    start();
  }, []);
  const start = async() => {
  setListD(await getAllDeparment())
  setListP(await getAllProducts())
}

const AddProdect =async (n, p, c, d) => {
  let check = false;

  if (ListP.length >= 1) {
    for (let index = 0; index < ListP.length && index < ListD.length; index++) {
      if (ListP[index].name === n) {
        check = true;
      }
      if (ListD[index].name === d)
        d = ListD[index].id;
    }
  }
  if (check == false) {
   let res= await saveOneProduct(n, p, c, d)


  }
  else alert("not can add it...")
};

  return (
    <div >
      <Input placeholder='name Product' onChange={(e) => {
        setName(e.target.value);
      }} ></Input>
      <br />
      <Input placeholder='price' type="number" onChange={(e) => {
        setPrice(e.target.value);
      }}  ></Input>
      <br />
      <Input placeholder='count' type="number" onChange={(e) => {
        setCount(e.target.value);
      }}  ></Input>
      <br />
      <Select placeholder='select Your deparment' onChange={(e) => {
        setDepartment(e.target.firstElementChild.innerText)
      }}   options={D}>
      </Select>
      <br />
      <Button basic onClick={(e) => {

          props.AddProdect(Name, Price, Count, Departemnt);
         
      }} >save</Button>


    </div>
  );
}

export default Product;
