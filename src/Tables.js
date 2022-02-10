function Tables () {
    return(
        <>
        
        <div className="container-fluid px-4">
                 <div className="row my-5">
                    <h3 className="fs-4 mb-3">LIST</h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Detail</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Umang</td>
                                    <td>FRONTEND DEV.</td>
                                    <th scope="col"><button className="btn btn-success">View</button></th>
                                    <th scope="col"><button className="btn btn-warning">Update</button></th>
                                    <th scope="col"><button className="btn btn-danger">Delete</button></th>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>KRUTIK</td>
                                    <td>BACKEND DEV.</td>
                                    <th scope="col"><button className="btn btn-success">View</button></th>
                                    <th scope="col"><button className="btn btn-warning">Update</button></th>
                                    <th scope="col"><button className="btn btn-danger">Delete</button></th>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>HARSH</td>
                                    <td>FRONTEND DEV.</td>
                                    <th scope="col"><button className="btn btn-success">View</button></th>
                                    <th scope="col"><button className="btn btn-warning">Update</button></th>
                                    <th scope="col"><button className="btn btn-danger">Delete</button></th>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>ARATI</td>
                                    <td>DATABASE</td>
                                    <th scope="col"><button className="btn btn-success">View</button></th>
                                    <th scope="col"><button className="btn btn-warning">Update</button></th>
                                    <th scope="col"><button className="btn btn-danger">Delete</button></th>
                                    
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        
        </>

    )
}

export default Tables;