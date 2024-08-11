import React from 'react'

const Home = () => {
return (
    <div>
        <div className=' bg-slate-800 font-semibold text-yellow-50 h-80 flex justify-center items-center w-60 mx-auto mt-6 border-r-8'>
            <form className=' pt-4'>
                email : <input type='email'/> <br/> <br/>
                phone no : <input type='text'/> <br/> <br/>
                password : <input type='password'/> <br/> <br/>
                confirm password : <input type='password'/> <br/>
                <input type='submit' value="click here"/>
            </form>
        </div>
    </div>
)
}

export default Home