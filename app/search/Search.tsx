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
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchQuery}
                placeholder='Enter the search term'
                onChange={e => setSearchQuery(e.target.value)}
            />

            <button type="submit" className='btn'>Search</button>
        </form>
    )
}

export default Search;