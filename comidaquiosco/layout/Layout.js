import Head from 'next/head';
import SideBar from '../components/SideBar';
import Modal from 'react-modal'
import useQuiosco from '../hook/useQuiosco';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#__next');  
export default function Layout({children,pagina}) {
    const {modal} = useQuiosco() 
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
        {modal&&(
            <Modal isOpen = {modal}
                  style={customStyles}            
            >
                <h1>este es el modal</h1>
            </Modal>
        )}
        </>
          
    )
}