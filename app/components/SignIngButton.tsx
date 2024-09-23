'use client'

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
    const { data: session } = useSession();
    
    if (session && session.user) {
        return <button onClick={()=>signOut()} className="text-red-600" >Sign out</button>;
    }
    
    return <button onClick={()=>signIn()}  className="text-green-700">Sign in</button>;
    };

    export default SignInButton;