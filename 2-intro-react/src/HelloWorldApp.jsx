// Todo componente es una función
import PropTypes from 'prop-types';
import { Tittle } from './components/Tittle';
import { Book } from './components/Book';
import { UserDetails } from './components/UserDetails';

//Se utiliza props para utilizar las variables o como destrucción de objetos
// export function HelloWorld({user, id}){ //uuncón normal
export const HelloWorldApp = ({user, id, tittle, book}) =>{ //Funcion flecha
    console.log(tittle);
    // const name =  'Pepe';
    // Cuando voy a devolver mas de una linea, es necesario poner los parentesis y agregar todo dentro de un DIV o en React se utiliza mejor un fragmento, asi : <></> o con <Fragment></Fragment>
    return (
        <>
            <Tittle tittle={tittle}/>
            <UserDetails user={ user } id = {id}/>
            <Book book={book}/>
        </>
    );
}
//La siguientes validaciones van al final, depues de la función
///Validaciones
HelloWorldApp.propTypes= {
    tittle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}
//Datos por defecto
HelloWorldApp.defaultProps = {
    tittle:  'Hola mundo por defecto',
    book: 'Book por defecto',
}