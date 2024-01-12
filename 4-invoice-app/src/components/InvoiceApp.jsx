import { getInvoice } from "../services/getInvoice"
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";

export const InvoiceApp = () => {

    // const invoice = getInvoice();
    const {id, name, client, company, items} = getInvoice();
    //Al atributo name se le da un alias
    return (
        <>
            <div className="container">
                <div className="card my-3">

                    <div className = "card-header">
                        <h1>Ejemplo factura</h1>
                    </div>

                    <div className="card-body">
                        <InvoiceView id={ id } name={ name }/>
                        <div className="row my-4">
                            <div className="col">
                                <ClientView tittle="Datos del cliente" client={client}/>
                            </div>
                            <div className="col">
                                <CompanyView tittle="Datos de la empresa" company = {company}/>
                            </div>
                        </div>
                        <div className="py-3">
                            <ListItemsView tittle="Productos de la factura" items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}