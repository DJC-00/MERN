import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const AuthorList = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const [delToggle, setDelToggle] = useState(false)


    const deleteAuthor = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
        .then(response => {
            console.log(response)
            // Remove from Dom without refresh
            // setAuthorList(authorList.filter(author => author._id != _id))
            
            // Trigger useEffect by changing delToggle
            setDelToggle(!delToggle)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(response => {
            console.log(response.data.results)
            const sorted = response.data.results.sort((a, b) => a.name.localeCompare(b.name))
            setAuthorList(sorted)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [delToggle, props.newAuthorToggle]);

    return (
        
    <div className='container d-flex justify-content-center'>
        <table className="table table-dark table-hover w-50 text-center shadow my-5">
            <thead >
                <tr className=' table-primary'>
                    <th scope="col">Author</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
                <tbody>
            {authorList.map( author => {
                return(
                <tr key={author._id}>
                    {/* <td>{author.name}</td> */}
                    <td>
                        <Link to={`authors/${author._id}`} type="button" className=" link-light">{author.name}</Link>
                    </td>
                    <td className=''>
                        <Link to={`authors/edit/${author._id}`} type="button" className="btn btn-sm btn-outline-primary mx-3">Edit</Link>
                        <button onClick={(e) => deleteAuthor(author._id)} type="button" className="btn btn-sm btn-danger mx-3">Delete</button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    );
}

export default AuthorList;

{/* <div key={author._id} className="card shadow px-2 m-2 w-25  ">
    <img className="card-img-top" src="holder.js/100x180/" alt="" />
    <div className="card-body">
        <h4 className="card-title text-center"><Link to={`/authors/${author._id}`}>{author.name}</Link></h4>
    </div>
    <div className="d-flex flex-wrap justify-content-center gap-3 pb-2">
        <Link to={`authors/edit/${author._id}`} type="button" className="btn btn-sm btn-outline-primary">Edit</Link>
        <button onClick={(e) => deleteAuthor(author._id)} type="button" className="btn btn-sm btn-danger">Delete</button>
    </div>
</div> */}