import React , {useState} from 'react';
import TodoLists from './TodoLists';

const App = () => {

    const[inputList, setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const ListClicked = () => {
        setItems((oldItems) => {
            return [...oldItems , inputList];
        }); 
        setInputList("");
    };

    const Delete = (id) => {
        console.log("Deleted");
        
        setItems((oldItems)=>{
            return oldItems.filter((arrElem , index)=>{
                return index !== id;
            })
        })
    }


    return(
        <>
        <div className="main_part">
            <div className="middle_part">
                <br />
                <h1>Todo List</h1>
                <br />
                
                <input className="input" type="text" placeholder = "Add Items..." 
                value={inputList} onChange={itemEvent}/>
                <button className="button" onClick = {ListClicked}>+</button>
                <ol>
                    {/*<li>
                        {inputList}
                    </li>*/}

                    {Items.map((itemValue , index) => {
                        return <TodoLists 
                        key={index}
                        id={index}
                        text={itemValue}
                        onSelect={Delete}  />
                    })}

                </ol>
            </div>
        </div>
        </>
    )
}

export default App