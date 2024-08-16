import { FormEvent, useState, FC } from 'react';
import { toast } from 'react-hot-toast'
import css from './SearchBar.module.css'
import { SearchBarProps } from './SearchBarProps';


const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
    };

    return (
        <header className={css.searchBar}>
            <div className={css.container}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <div className={css.inputWrapper}>
                        <button type='submit' className={css.searchButton}>
                            <img
                                src='/search.svg'
                                alt='Search Icon'
                                className={css.searchIcon}
                            />
                        </button>

                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoComplete='off'
                            autoFocus
                            placeholder='Search images and photos'
                            className={css.input}
                        />
                    </div>
                </form>
            </div>
        </header>
    )
}

export default SearchBar;