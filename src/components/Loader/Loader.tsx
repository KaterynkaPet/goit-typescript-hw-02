import { FC } from 'react';
import css from './Loader.module.css'
import { Oval } from 'react-loader-spinner'

const Loader: FC = () => {
    return (
        <div className={css.loader}>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#007bff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;