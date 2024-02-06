//import React from 'react'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import './dataTable.scss'
import { Link } from 'react-router-dom'

type Props={
  columns:GridColDef[],
  rows:object[],
  slug:string
}
export const DataTable = (props:Props) => {

  const handledelete=(id:number)=>{
    //delete item 
    //axios.delete(`api/${slug}/id`)
    console.log(id +" has been deleted")
  }

  const actionColumn:GridColDef={
    field:'action',
    headerName:'Action',
    width:100,
    renderCell:(params)=>{
      return(
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={()=>handledelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }
  return (
    <div className='dataTable'>
        <DataGrid className='dataGrid'
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
