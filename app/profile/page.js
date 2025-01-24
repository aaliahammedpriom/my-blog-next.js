import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    // console.log(user)
    if (user && isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-10 rounded-lg shadow-md text-center">
                    <h1 className="text-4xl font-bold text-blue-800 mb-4">Hi,</h1>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back !</h1>
                </div>
            </div>
        );
    }
    redirect('https://blognavigator.kinde.com/auth/cx/_:nav&m:login&psid:019495d548c01d239feb890e49e29e3a');

}
