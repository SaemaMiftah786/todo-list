import React, { useState } from 'react'
//import { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title of description is not defined");
        }else{
            addTodo(title, desc);
        }
        setTitle("")
        setDesc("")
    }
  return (
   <>
   <h3>Add a Todo</h3>
   <form onSubmit={submit}>
   <div className="form-group row">
        <div className="form-group">
            <label htmlFor="title" className="sr-only">Title</label>
            <div className="col-sm-10">
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter Title"/>
            </div>
        </div>
    </div>
    <div className="form-group row">
        <div className="form-group">
            <label htmlFor="Description" className="sr-only">Description</label>
            <div className="col-sm-10">
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter description"/>
            </div>
        </div>
    </div>
    <br/>
    <button type="submit" className="btn btn-success">Add</button>
    </form>
   
   </>
  )
}

export default AddTodo
