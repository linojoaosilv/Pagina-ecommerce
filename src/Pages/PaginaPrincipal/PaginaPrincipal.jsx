import HeaderLoja from "../../Components/Header/HeaderLoja";
import './PaginaPrincipal.css'

function PaginaPrincipal(){
    return(
        <div>
            <HeaderLoja/>

            {/* trocar essa seção dps  */}
            <section className="seção-banner"/> 
            
            <section className="seção-listadeprodutos">
                <div >

                </div>
            </section>
        
        </div>
    )
}

export default PaginaPrincipal;