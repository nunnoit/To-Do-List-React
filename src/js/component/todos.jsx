import React, { useState } from "react";

export const Todo = () => {
  const showList = 1
  const [listTodos, setListTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteTodo = (indiceTarea) => {
    setListTodos((prevState) => {
      return prevState.filter((item, index) => {
        return index !== indiceTarea;
      });
    });
  };

  const deleteTodo2 = (indiceTarea) => {
    setListTodos((prevState) => {
      return prevState.filter((item, index) => {
        return index !== indiceTarea;
      });
    });
  };

  const Form = () => {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  };


  return (
    <div className="card rounded">
      <input
        type="text"
        className="border-0 rounded p-3"
        placeholder="Write a new Note and then press ENTER to add it."
        onKeyUp={(e) => {
          if (e.keyCode == "13") {
            let arrAux = listTodos.slice();
            arrAux.push(e.target.value);
            setListTodos(arrAux);
            e.target.value = "";
          }
        }}
      />
      <ul id='lust' className="list-group">
        {listTodos.map((item, indice) => {
          return (
            <li
              className="list-group-item d-flex align-items-center subsection p-3"
              key={indice}
            >
              {item}
                <button
                    type="button"
                    className="align-self-end"
                    onClick={(e) => {
                    deleteTodo(indice);
                    }}
                >
                    <i className="fa fa-times"></i>
              </button>
            
            </li>
            
          );
        })}
      </ul>
    <div>
    {
      showList ? (
        <div>
        <p className="text-start ps-3 pt-3">{listTodos.length} saved notes.</p>
        </div>
      ) : (
        <p>no hay registro.</p>
      )
    }
    {console.log('hello', showList)}
    </div>
  
    </div>
  );
};

