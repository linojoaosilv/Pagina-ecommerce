import CartaoItem from "../../Components/CartãoItem/Cartaoitem";
import HeaderLoja from "../../Components/Header/HeaderLoja";
import './PaginaPrincipal.css'

function PaginaPrincipal(){

    return(
        <div>
            <HeaderLoja/>

            {/* trocar essa seção dps  */}
            <section className="seção-banner"/> 
            
            <section className="seção-listadeprodutos">
                <div className="seção-listadeprodutos_h1itens">
                    <h1> Itens disponiveis</h1>
                    <p>Produtos que faze msucesso em nosso site!</p>
                </div>
                <div className="lsita-de-produtos">
                    <CartaoItem 
                    fotoProduto={'https://i.pinimg.com/236x/29/0e/72/290e72859376894ef42b2b2cbbf38bea.jpg '}
                    nomeProduto={"gato"} 
                    descricaoProduto={"gato feio a venda"} 
                    precoProduto={"12,99"} /> 
                </div>
            </section>
        
        </div>
    )
}

export default PaginaPrincipal;