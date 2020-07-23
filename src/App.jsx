import React,{useState} from 'react';
import ToDoLists from './ToDoLists';
const App = ()=>{

    const [inputList, setInputList] = useState("");
    const [Items,setItems]= useState([]);

    const itemEvent= (event)=>{

        setInputList(event.target.value);
    }

    const ListofItems= () =>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");

    };

 
    const deleteItem=(id)=>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            });
        });
    };


    return(
        <>
          <div className="main_div">
              <div className="center_div">
                  <br/>
                  <h2>You can easily add the contents/products and Delete them!</h2>
                  <h3>Use for purchasing products and delete them after purchased.</h3>
                  <h1>ToDo List</h1>
                  <br/>
                  <input
                      type="text"
                      placeholder="Add Items"
                      value={inputList}
                      onChange={itemEvent}
                      />

                  <button onClick={ListofItems}>+</button>

                  <ol>
                      {/* <li>{InputList}</li? */}

                      {Items.map((itemval, index)=>{
                          return(
                              <ToDoLists
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItem}
                                />
                          );
                      })}

                  </ol>

              </div>

          </div>
        </>
    );


};

export default App;

