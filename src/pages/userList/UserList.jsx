import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { userRows } from "../../dummyData";
import "./userList.css"


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className='userListUser'>
                      <img className='userListItem' src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 260,
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick = {() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    
      ];

    return (
        <div className="userList">
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

export default UserList
