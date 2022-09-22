import React, { useState } from 'react';
import auth from "../../firebase.init"
import { useAuthState, useUpdateEmail } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';


const Profile = () => {
    const [user] = useAuthState(auth)



    const [updateEmail, updating, error] = useUpdateEmail(auth);
    const [email, setEmail] = useState('');


    let emailerror;
    if (error) {

        emailerror = <small className='text-red-500'>{error?.message}</small>
        // <div>
        //     <p>Error: {error.message}</p>
        // </div>

    }
    if (updating) {
        return <Loading></Loading>
    }




    return (
        <>
            <div className='p-5 text-center'>
                <h2 className='text-2xl'>This is my profile</h2>
                <h2 className=''>User Name: {user?.email}</h2>
                <h2>User Email: {user?.displayName}</h2>
            </div>

            <p>{emailerror}</p>
            <div className='bg-cyan-200 p-5'>

                <div >
                    {/* <input className='border-1'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> */}
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Your Email" required></input>

                    <button className='btn border-2 ml-2'
                        onClick={async () => {
                            await updateEmail(email);
                            alert('Updated email address');
                        }}
                    >
                        Update email
                    </button>
                </div>





            </div>

        </>
    );
};

export default Profile;