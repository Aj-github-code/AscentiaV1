import React, { useState } from "react"
import Dcards from "./Dcard"
import "./Products.css"
import Sdata from "./Sdata"

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className="producttitle">
        <h3><b>Products</b></h3>

        </div>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.slug} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem

/*
import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Sdata from "../Destinations/Sdata"
const Destinations = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <HeadTitle />
      <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Destinations*/