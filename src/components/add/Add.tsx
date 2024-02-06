import { GridColDef } from '@mui/x-data-grid';
import './add.scss'

//import React from 'react'

type Props={
    slug:string;
    columns:GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

export const Add = (props:Props) => {
    // const handleSubmit =(e)=>{
    //     e.pre
    //     // add new item
    //     // axios.post(`/api/${slug}s`)
    //     onSubmit={(e) => handleSubmit(e)}
    // }
    return (
    <div className='add'>
        <div className="model">
            <span className="close" onClick={()=>props.setOpen(false)}>  X       
            </span>
            <h1 className="title">Add New {props.slug}</h1>
            <form >
                {props.columns.filter(item=>item.field !=="id" && item.field !=='img') 
                .map(column=>(
                    <div className="item" key={column.field}>
                        <label htmlFor={column.field}>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} id={column.field} />
                    </div>           
                    ))}
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
    )
}
