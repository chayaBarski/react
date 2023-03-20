
import AddDepartment from './AddDepartment';
import Product from './Product';
import { useEffect, useState } from "react";
import { Select } from 'semantic-ui-react';
import { Button } from "semantic-ui-react";
import { Grid, Image, Segment } from 'semantic-ui-react';
import { getAllDeparment, saveOneDeparment, deletOneDeparment, editOneDeparment } from '../service/deparment';
import { getAllProducts, saveOneProduct, deletOneProduct, editOneProducr } from '../service/Producrs';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function List(props) {
    const [ListP, setListP] = useState();
    const [ListD, setListD] = useState();
    const [NameDeparment, setNameDeparment] = useState("");
    const [Description, setDescription] = useState("");
    const [NameProduct, setNameProduct] = useState("");
    const [Price, setprice] = useState(0);
    const [Count, setCount] = useState(0);
    const [Deparment, setDeparment] = useState("");
    const D = ListD.map((d, i) => {
        return ({ key: d.id, value: d.id, text: d.name })
    });



    useEffect(() => {
        start();
    }, []);
    const start = async () => {
        let res = await getAllDeparment()
        setListD(res);
        let res2 = await getAllProducts()
        setListP(res2)
    }
    const  deleteProducr =async (p) => {
        console.log(p);
       let res=await deletOneProduct(p)
      };
      const editProducr =async (i, n, p, c, d) => {
        if (ListD.length >= 1) {
          for (let index = 0; index < index < ListD.length; index++) {
          
            if (ListD[index].name === d)
              d = ListD[index].id;
          }
        }
        let res= await editOneProducr(i, n, p, c, d);
        alert(res)
          
      };
      const editDeparment = async (i, n, d) => {
        
        let res= await editOneDeparment(i, n, d)
      };
      const DeletDeparment = (d) => {
        let check = false;
        if (ListP.length >= 1) {
          for (let index = 0; index < ListP.length; index++) {
            if (ListP[index].idDeparment === d.id) {
    
              check = true;
              break;
            }
    
          }
        }
        console.log(check)
        if (check == false) {
          let result = deletOneDeparment(d)
          alert(result)
        }
        else alert("don't can delete it")
      };
     
    return (
        <div>
            <h1>Deparment</h1>
            {ListD.length > 0 ? ListD.map((d, i) => {


                return (<Grid columns={3} divided key={i}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>
                                {d.edit == false ? <div onClick={(e) => {

                                    setNameDeparment(d.name)
                                }}> name:{d.name}</div> :
                                    <input value={NameDeparment} onChange={(e) => {
                                        setNameDeparment(e.target.value)
                                    }}></input>
                                }
                                {d.edit == false ? <div>description:{d.description}</div>
                                    :
                                    <input value={Description} onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}></input>
                                }
                                {d.edit == false ?
                                    <Button basic onClick={() => {
                                        DeletDeparment(d)
                                    }}>delete</Button> : ""
                                }

                                {d.edit == false ?

                                    <Button basic onClick={() => {
                                        d.edit = true;
                                        setNameDeparment(d.name);
                                        setDescription(d.description);
                                        alert(d.edit)
                                    }}>edit</Button>
                                    :
                                    <Button basic onClick={() => {
                                        d.edit=false;
                                        editDeparment(d.i, NameDeparment, Description)
                                    }}>save chance</Button>
                                }




                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>)
            }) : ""}

            <h1>Products</h1>
            {ListP.length > 0 ? ListP.map((p, i) => {
                return (

                    <Grid columns={5} key={i}>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment>
                                    {p.edit == false ? <div> name:{p.name}</div> :
                                        <input value={NameProduct} onChange={(e) => {
                                            setNameProduct(e.target.value)
                                        }}></input>
                                    }
                                    {p.edit == false ? <div onClick={(e) => {

                                    }}>price:{p.price}</div>
                                        :
                                        <input value={Price} onChange={(e) => {
                                            setprice(e.target.value)
                                        }}></input>
                                    }
                                    {p.edit == false ? <div>count:{p.count}</div>
                                        :
                                        <input value={Count} onChange={(e) => {
                                            setCount(e.target.value)
                                        }}></input>
                                    }
                                    {p.edit == false ? <div>deparment:{p.deparment}</div>
                                        :
                                        <Select value={Deparment} onChange={(e) => {
                                            setDeparment(e.target.firstElementChild.innerText)
                                          }}   options={D}>
                                          </Select>
                                    }
                                    {p.edit == false ?
                                        <Button basic onClick={() => {
                                            deleteProducr(p)
                                        }}>delete</Button> : ""
                                    }

                                    {p.edit == false ?

                                        <Button basic onClick={() => {
                                            p.edit = true;
                                         setNameProduct(p.name);
                                         setCount(p.count);
                                         setprice(p.price);
                                         setDeparment(p.Deparment)
                                            alert(p.edit)
                                        }}>edit</Button>
                                        :
                                        <Button basic onClick={() => {
                                            p.edit=false;
                                            editProducr(p.i, NameProduct, Price,Count,Deparment)
                                        }}>save chance</Button>
                                    }



                                    nam:{p.name},
                                    price:{p.price},
                                    count:{p.count},
                                    deparment:{p.deparment}
                                  <Button basic onClick={(e) => {
                                        props.editp(p);
                                        console.log(p)
                                    }}>edit</Button>
                                    <Button basic onClick={() => {
                                        props.deleteProducr(p)
                                    }}>delete</Button>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>)
            }) : ""}
        </div>
    );
}

export default List;
