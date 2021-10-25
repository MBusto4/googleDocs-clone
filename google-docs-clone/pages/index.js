import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>GoogleDocs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />


      <section className=' bg-[#251052] pb-10 px-10 text-white'>
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
            <div className='relative h-52 w-40 hover:border-green-400 border-4 border-[#D62AD0] cursor-pointer'>
              <img src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png' layout='fill' />
            </div>
            <p className='ml-2 mt-2 font-semibold text-md text-[white]'>Blank</p>
          </div>

        </div>
      </section>

      <section>
        <div className=' max-w-3xl mx-auto py-8'>
          <div>
            <h2>My Documents</h2>
            <p>Date Created</p>
          </div>
        </div>
      </section>

    </div>
  )
}
