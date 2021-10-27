
import { getProviders, signIn as signInProvider } from 'next-auth/react'
import Header from '../../components/Header'
import { useRouter } from "next/dist/client/router"
import Footer from '../../components/Footer'

// running on the browswer
function signIn({ providers }) {

    const router = useRouter()

    console.log("Providers are here ---> ", providers)
    return (
        /*
        next auth documentation
        looping thru the providers getting the values
        mapping thru all the providers and get the provider value which is google
        */
        <>
            <Header />
            <div className='  flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
                <img className='w-100' src="https://tettra.com/wp-content/uploads/2019/03/integrations-google-docs-logo.png" alt="" />
                <p className='font-lg italic'> Not Real APP!! This is an GOOGLEDOCS clone Made by Michael Busto</p>
                <div className='mt-40'>
                    {
                        Object.values(providers).map((provider) => (
                            <div key={provider.name} className='flex flex-col'>
                                <button className='p-3 bg-white rounded-lg text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white'
                                    onClick={() =>
                                        signInProvider(provider.id, { callbackUrl: '/' })
                                    }
                                >
                                    Sign in with {provider.name}
                                </button>

                                <button onClick={() => router.push('/')} className='p-3 mt-10 bg-white rounded-lg text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white' >
                                    Back to Home
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
}

// Server Side Render -- from next.js docs
export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signIn