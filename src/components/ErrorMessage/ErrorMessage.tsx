import { FC } from 'react';
import { ErrorMessageProps } from './ErrorMessageProps';
import css from './ErrorMessage.module.css';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className={css.ErrorMessage}>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage;