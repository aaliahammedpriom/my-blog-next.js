import getSinglePost from '@/lib/getSinglePost'
import React from 'react'

export async function generateMetadata({ params }) {
    const { id } = params
    const post = await getSinglePost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function Page({ params }) {
    const { id } = params
    const post = await getSinglePost(id);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
                <h2 className="text-3xl font-semibold text-blue-600">{post.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{post.body}</p>
            </div>
        </div>
    )
}
