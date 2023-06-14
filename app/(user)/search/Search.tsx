'use client'

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery("");
        router.push(`/search/${searchQuery}`)
    }

    return (
        <form onSubmit={handleSearch} className="flex gap-x-1">
            <input
                type="text"
                value={searchQuery}
                placeholder='Enter the search term'
                onChange={e => setSearchQuery(e.target.value)}
                className='form-input p-2 rounded-md bg-gray-100 text-slate-900 outline-none focus:border-2 focus:border-blue-500 transition-colors duration-100'
            />

            <button type="submit" className='btn py-1 px-5 bg-blue-500 text-white rounded-md'>Search</button>
        </form>
    )
}

export default Search;