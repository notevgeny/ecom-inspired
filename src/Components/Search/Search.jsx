import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container } from '../Layout/Container/Container';
import style from './Search.module.scss';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Search = () => {

    const { openSearch } = useSelector(state => state.search);

    const validationSchema = Yup.object({
        query: Yup.string().required('Введите запрос')
    })

    const navigate = useNavigate();

    const handleSubmitSearch = ({query}) => {
        if (query.trim()) {
            navigate(`/search?q=${query}`);
        }
    }

    return (
        openSearch && 
        <div className={style.search}>
            <Container>
                <Formik
                    initialValues={{
                        query: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitSearch}
                >
                    <Form className={style.form}>
                        <Field 
                            className={style.input}
                            type='search'
                            placeholder='Найти...'
                            name='query'
                        />
                        <ErrorMessage 
                            className={style.error} 
                            name='query'
                            component={'p'} 
                        />
                        <button className={style.btn} type='submit'>Искать</button>
                    </Form>
                </Formik>
            </Container>
        </div>
    )
}
