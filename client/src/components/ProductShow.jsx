import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
const ProductShow = () => {
    const [prodcuts, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        let data = await fetch("http://localhost:5000/products");
        data = await data.json();
        setProducts(data)
    }
    const deleteProduct = async(id)=>{
        let data = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        })

        data = await data.json()
        if(data){
            // alert("Deleted")
            getData();
        }

    }
    return (
        <>
            <div className='product_show'>
                <h1>Products List Show</h1>
                <ul>
                    <li>S.No</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Operations</li>
                </ul>
                {
                    prodcuts.map((item, index) => {
                        return (
                            <>
                                <ul key={item._id}>
                                    <li>{index +1}</li>
                                    <li>{item.name}</li>
                                    <li>{item.price}</li>
                                    <li>{item.category}</li>
                                    <li>{item.company}</li>
                                    <li><button onClick={()=>deleteProduct(item._id)} ><b>Delete</b></button>
                                    <Link to={`/update/${item._id}`}>Update</Link>
                                    </li>
                                </ul>
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}

export default ProductShow