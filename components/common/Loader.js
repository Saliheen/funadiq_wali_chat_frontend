import React from 'react'
import {  Grid } from 'react-loader-spinner'

export default function Loader() {
  return (
   <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/5 z-50 flex items-center justify-center'>
<Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}
