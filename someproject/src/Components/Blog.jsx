// import React from "react";
// import "../Styles/blog.css";

// const Blog= [
//   {
//     id: 1,
//     title: "Rising Crime Rates in Urban Areas",
//     description: "An analysis of the factors leading to increased crime in cities and potential solutions.",
//     image:"/Crime2.jpg"
//   },
//   {
//     id: 2,
//     title: "Cybercrime: A Growing Threat",
//     description: "How cybercriminals are exploiting digital vulnerabilities and ways to stay protected.",
//     image:"/Crime1.jpg"
//   },
//   {
//     id: 3,
//     title: "Understanding Organized Crime",
//     description: "A deep dive into the world of organized crime and its global impact."
//   }
// ];

// const BlogCard = ({ title, description }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-lg mb-4 bg-white">
//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p className="text-gray-700">{description}</p>
//       <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Read More</button>
//     </div>
//   );
// };

// const BlogList = () => {
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Crime Blog</h1>
//       {Blog.map((blog) => (
//         <BlogCard key={blog.id} title={blog.title} description={blog.description} image={blog.image} />
//       ))}
//     </div>
//   );
// };

// export default Blog;

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
        // {
        //     id:4,
        //     title:"July 18, 2021",
        //     content:"Sed magna dui, dignissim id felis vitae, consectetur",
        //     image:"/justice1.jpg",
        // },
        // {
        //     id:5,
        //     title:"July 18, 2021",
        //     content:"Fusce suscipit risus tempor, blandit urna at, laoreet ex",
        //     image:"/i2.jpg",
        // },
        // {
        //     id:6,
        //     title:"July 18, 2021",
        //     content:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
        //     image:"/i3.jpg",
        // }
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