import React from 'react'


const Crime_View=()=>
{
    const posts =[
        {
         id:1,
       title:"All saving ",
      price:"$30200",
      percentage:"30.6%",
        color:"blue",
        colorbg:"lightgrey"
        },
        {
            id:2,
            title:"Page Views",
           price:"$30200",
           percentage:"30.6%",
             color:"green",
             colorbg:"lightorange"
        },
        {
          id:3,
          title:"Total Task ",
         price:"$14568",
         percentage:" 30.6%",
           color:"blue",
           colorbg:"lightgrey"
         },
         {
          id:4,
          title:"Download",
         price:"$30200",
         percentage:"30.6%",
           color:"green",
           colorbg:"lightorange"  
         },
     ];
    
    return(
        <div>
            {/* <LineChartGraph/> */}
        <div className="vieww">
             <div className="explored">
            <h1>Explore Redesigned Able Pro</h1>
            <h6>The Brand new User Interface with power of Bootstrap Components.</h6>
            <h6>Explore the Endless possibilities with Able Pro.</h6>
        <button type="text" className="btd"><span className="ex">Exclusive on Themeforest </span></button>
        </div>
             <div>
            <GoRocket className="rock" size={50}/>
            {/* <img src={end}/> */}
            </div>
        <div className="move">
         {/* <ViewGraph/>  */}
            <div className="move1">
            {/* <CustomerOrderTable/> */}
            {/* <ViewGraph/> */}
            <div className="move2">
            {/* <TwoChart/> */}
            
        </div>

            </div>
            </div>
       

                    </div>
                    <div className="post1-container">
                            {posts.map((post) =>(
                                <div key={post.id} className="post">
                                  <div className='postHead'>
                                    <div style={{backgroundColor:`${post.colorbg}`}} >{post.icon}</div>
                                    <div className='PostTitle'>{post.title}</div>
                                  
                                    </div> 
                                  <div className="postHead1">
                                    <div>{post.price}</div>
                                    <div>{post.percentage}</div>
                                    </div>  
                                    
                        </div>
                ))}
                    </div>
                    <div>
                      
                    </div>
                    </div>
                    
    
    )
}
export default Crime_View;