import { DataGrid } from '@material-ui/data-grid';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

import { productRows } from "../../dummyData";

import "./productList.css";


const ProductList = () => {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className='productListItem'>
                      <img className='productListImg' src={params.row.img} alt="" />
                      {params.row.name}
                  </div>
              )
          }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 260,
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick = {() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    
      ];

    return (
        <div className="productList">
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export default ProductList;
