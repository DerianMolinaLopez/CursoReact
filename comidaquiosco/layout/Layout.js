import Head from 'next/head';
import SideBar from '../components/SideBar';
export default function Layout({children,pagina}) {
    
    return(

        <>
        <Head>
        <tittle>cafe - {pagina}</tittle>
        <meta name="desctiption" content="quiosco de cafe"/>
        </Head>
          
            <div className=' lg: flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:2-1/5'>
                    <SideBar></SideBar>
                </aside>
                <main className='w-8/12 xl:w-3/4 2xl:2-4/5 h-screen overflow-y-scroll'>
                    <div className='p-10'>
                        {children}
                    </div>
                    
                </main>
            </div>
        
        </>
          
    )
}