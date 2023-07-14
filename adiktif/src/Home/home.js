import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '@fontsource/montserrat'
import '@fontsource/inter'

const Home = () => {

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #54509F 40%, white 500%)',

        }}>
            <Header></Header>
            <div style={{
                height: '91vh', // Set the height to 70% of the viewport height
            }}>
                <h1>TESTTTTTTTTTTTTTTTTTTTTT</h1>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default Home
