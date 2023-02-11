import React, { useState } from 'react'
const baseUrl = 'http://localhost:8000'


function BlogItem(props) {
    


  return (
    <>
    <div className="card p-3">
    <h2 className='m-3'>{props.title}</h2>
    <h5>{props.desc}</h5>
    <p className='m-1'>{props.author}</p>
    <p className='m-1'>{props.date}</p>
    </div>
    </>

  )
}

export default BlogItem