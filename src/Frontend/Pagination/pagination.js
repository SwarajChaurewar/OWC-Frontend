import React from 'react'
import './pagination.css'   

export const Pagination = ({totalpost,postperpage,setCurrentpage, currentpage}) => {
  let pages=[]
   for(let i=1;i<=Math.ceil(totalpost/postperpage);i++)
   {
    pages.push(i)
   }  
    return (
    <div className='pagination'>
        {
            pages.map((page,index)=>{
                 return <button  style={{"textAlign":"center"}} margin="auto" className={page===currentpage?'active':''}  key={index} onClick={()=>setCurrentpage(page)}>{page}</button>
            })
        }
    </div>
  )
}
