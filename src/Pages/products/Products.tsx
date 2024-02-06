//import React from 'react'
import { useState } from 'react';
import { Add } from '../../components/add/Add';
import { DataTable } from '../../components/dataTable/DataTable';
import { products } from '../../data';
import './products.scss'
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

export const Products = () => {
    const [open,setOpen]=useState(false);
    return (
      <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <button onClick={()=>setOpen(true)}>Add Products</button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
        {open && <Add slug='products' columns={columns} setOpen={setOpen}/>}
      </div>
    )
}
