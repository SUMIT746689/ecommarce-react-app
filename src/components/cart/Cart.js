import React,{useEffect,useState} from 'react';
import cart_style from './Cart_style.module.css'

function Cart() {
    const [data,setData] = useState([]);
    const [haveValue,setHaveValue] = useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>{
            setData(data.filter(item=>item.id <=10));
            setHaveValue(true);
        });
    },[]);
    console.log(data);

  return (
  <div className={cart_style.allCart}>
    {haveValue ? 
    data.map(datas=>
    <div className={cart_style.cart} key={datas.id} >
        <img className={cart_style.image} src={datas?.url} alt={`imageId_${data[0].id}`}/>
        <p className={cart_style.p}>Id : {datas?.id}</p>
        <p className={cart_style.p}>{`${datas?.title.slice(0,20)} ...`}</p>
        <button className={cart_style.button}>ADD CART</button>
    </div>)
    :''}
  </div>);
}

export default Cart;
