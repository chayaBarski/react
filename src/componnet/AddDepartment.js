import { useState ,useEffect} from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { getAllDeparment, saveOneDeparment, deletOneDeparment, editOneDeparment } from '../service/deparment';
import { getAllProducts, saveOneProduct, deletOneProduct, editOneProducr } from '../service/Producrs';
function AddDepartment(props) {
  const [ListP, setListP] = useState();
  const [ListD, setListD] = useState();
  const [Name, setName] = useState(props.name);
  const [Descerption, setDescerption] = useState(props.description);
 

const AddDepartment1 =async (d) => {

  let check = false;
  if (ListD.length >= 1) {
    for (let index = 0; index < ListD.length; index++) {
      if (ListD[index].name === d.Name) {
        check = true;
        break;
      }
    }
  }
  console.log(check)
  if (check === false) {
   let res=await  saveOneDeparment(d);
   alert(res)
   
  }
  else alert("dont can insret it...")
};

  return (
    <div>
      <Input placeholder='name deparment' onChange={(e) => {
        setName(e.target.value);
      }}></Input>
      <Input placeholder='descerption deparment' onChange={(e) => {
        setDescerption(e.target.value);
      }}></Input>
      <Button basic onClick={(e) => {
       let data={
        name: Name,
        description:Descerption,
       }
        AddDepartment1(data);
       
      }} >save</Button>

    </div>
  );
}

export default AddDepartment;
