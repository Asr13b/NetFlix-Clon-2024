import React from 'react'
import Headr from '../../components/Headers/Headr'
import Footer from '../../components/Footers/Footer'
// import Row from "../../components/Rows/Row"
import Movies from '../../components/Movies'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'

const Home = () => {
  return (
    <>
<Headr/>
{/* <Movies/> */}
<Banner/>
<RowList/>
<Footer/>

    </>
  )
}

export default Home