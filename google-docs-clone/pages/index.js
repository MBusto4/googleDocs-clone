import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { useState } from 'react'
import Welcome from '../components/Welcome'
import { db } from '../firebase'
import firebase from 'firebase'
import {
  useCollectionOnce
} from "react-firebase-hooks/firestore"
import DocumentRow from '../components/DocumentRow'
import Footer from '../components/Footer'


export default function Home() {

  const { data: sessionData } = useSession()
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState("")

  const [snapshot, loading] = useCollectionOnce(db.collection('userDocs')
    .doc(sessionData?.user?.email)
    .collection('docs')
    .orderBy('timestamp', 'desc'))

  const autoReload = () => {
    location.reload()
  }

  const createDocument = () => {
    if (!input) return

    // db.collection('users')
    //   .doc(sessionData.user.uid)
    db.collection('userDocs')
      .doc(sessionData.user.email)
      .collection('docs')
      .add({
        fileName: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    setInput('')
    setShowModal(false)
    // autoReload()
  }

  const modal = (
    <Modal
      size='sm'
      active={showModal}
      toggler={() => setShowModal(false)}>

      <ModalBody>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='outline-none w-full'
          placeholder='Enter name of document...'
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </ModalBody>

      <ModalFooter>
        <Button
          color="blue"
          buttonType='link'
          onClick={(e) => setShowModal(false)}
          ripple='dark'
        >
          Cancel
        </Button>
        <Button
          color='blue'
          onClick={createDocument}
          ripple='light'
        >
          Create New
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      <Head>
        <title>GoogleDocs Clone</title>
      </Head>

      <Header />
      {modal}

      {sessionData ? (
        <>
          <section className=' bg-[#251052] pb-10 px-10 border-[#D62AD0] border-b-2  text-white'>
            <div className='mx-auto max-w-3xl'>
              <div className='flex items-center justify-between py-6'>
                <h2 className='text-[white] text-lg'>Start a New Documnent</h2>
                <Button
                  color='purple'
                  buttonType='outline'
                  iconOnly={true}
                  rounded={true}
                  ripple='dark'
                  className=' border-0'
                >
                  <Icon name='more_vert' size='3xl' />
                </Button>
              </div>
              <div>
                <div onClick={() => setShowModal(true)} className='relative h-52 w-40 hover:border-green-400 border-4 border-[#D62AD0] cursor-pointer'>
                  <img src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png' layout='fill' />
                </div>
                <p className='ml-2 mt-2 font-semibold text-md text-[white]'>Blank</p>
              </div>
            </div>
          </section>


          <section className='bg-[#4e338a] px-10 md:px-0 h-screen'>
            <div className='max-w-3xl mx-auto py-8 text-sm'>
              <div className='flex items-center justify-between pb-5 text-white'>
                <h2 className='font-medium flex-grow'> {sessionData?.user?.name}'s Documents</h2>
                <div onClick={autoReload} className='flex items-center  mr-32 cursor-pointer '>
                  <Icon name='refresh' size='3xl' color='white' />
                  <p className='font-medium flex-grow'>--- Refresh Documents ---</p>
                  <Icon name='refresh' size='3xl' color='white' />
                </div>
                <p className='mr-10'>Date Created</p>
                <Icon name='folder' size='3xl' color='white' />
              </div>

              {snapshot?.docs.map((doc) => (
                <DocumentRow
                  key={doc.id}
                  id={doc.id}
                  fileName={doc.data().fileName}
                  date={doc.data().timestamp}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className=' bg-[black] flex h-screen'>
          <div className='m-auto text-2xl text-[#D62AD0] italic'>
            <Welcome />
          </div>
        </div>

      )}
      <Footer />
    </div>
  )
}

