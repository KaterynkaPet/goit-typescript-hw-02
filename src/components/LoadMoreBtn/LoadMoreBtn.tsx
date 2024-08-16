import { FC } from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtnProps';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore, loading }) => {

    return (
        <div className={css.load}>
            {loading ? (
                <button disabled className={css.button}>
                    <span>Loading...</span>
                </button>
            ) : (
                <button onClick={onLoadMore} className={css.button}>
                    Load more
                </button>
            )}
        </div>
    );
};
export default LoadMoreBtn;