import {useState, useEffect} from 'react';

export default function Home() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://ricomart.enricodelarosa.tech/products')
        .then(res => res.json())
        .then(resArray => {
            console.log(resArray);
            setProducts(resArray);
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    return (
        <div style={{display: 'flex', rowGap: '20px', columnGap: '20px', marginTop: '40px'}}>
            {products.map(product => {
                return (
                    <div key={product._id} style={{padding: '10px 20px', border: '1px solid black', borderRadius: '15px', width: '400px', height: '150px'}}>
                        <h3>{product.name}</h3>    
                        <h4>Php {product.price}</h4>
                        <h5>
                            {product.description}
                        </h5>
                    </div>
                )
            })}
        </div>
    )


}