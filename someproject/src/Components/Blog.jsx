import React from "react";
import '../Styles/blog.css';
import {useState,useEffect} from "react";
function Blog(){
    const cards = [
        {
            id:1,
            title:"July 18, 2021",
            content:"Criminal law",
            image:"/crime11111.jpg",
        },
        {
            id:2,
            title:"July 18, 2021",
            content:"Cybercrime: A Growing Threat",
            image:"/crime1111.jpg",
        },
        {
            id:3,
            title:"July 18, 2021",
            content:"Understanding Organized Crime",
            image:"/crime11.jpg",
        }, 
        {
           id:4,
            title:"July 18, 2021",
            content:"Sed magna dui, dignissim id felis vitae, consectetur",
            image:"/justice1.jpg",
        },
        {
            id:5,
            title:"July 18, 2021",
            content:"Fusce suscipit risus tempor, blandit urna at, laoreet ex",
            image:"/crime.jpg",
        },
        {
            id:6,
            title:"July 18, 2021",
            content:"Justice for all",
            image:"/justice2.jpg",
        }

    ];

    // const[blog,setBlog]=useState([]);
    // useEffect(()=>{
    //     const getBlog=async()=>{
    //         try{
    //             const res=await axios.get(`https://botiga-kvf9.onrender.com/product/createProduct`);
    //             setBlog(res.data)
    //         }
    //         catch(error){
    //             console.log(error);
    //         }
    //     }
    //     getBlog();
    // },[])
    return(
        <div className="blogg">
            <h1 className="blog1">Blog</h1>
            <div className="card-container">
            {cards.map((card)=>(
                <div key={card.id} className="card">
                    <img src={card.image} alt={card.title} className="card-image"></img>
                    <div className="card-content">
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-content">{card.content}</p>
                    </div>
                </div>
            ))}
            </div>
            {/* {
                cards.map((item)=>(
                    <div>
                        <div>{item.blogNames}</div>
                        <div><img src={item.image}/></div>
                        </div>

                ) )
               
            } */}
        </div>

    )
}
export default Blog