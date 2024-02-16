import "./CartaoItem.css"

function CartaoItem({fotoProduto, nomeProduto, descricaoProduto,precoProduto}){
    return(
        <div className="cartaoItem">
            <div>
               <img src={fotoProduto} /> 
            </div>
            <div className="divTextos">
               <h1> {nomeProduto} </h1>
               <h3>  {descricaoProduto} </h3>
               <p> RS$ {precoProduto} </p>
            </div>
            
        </div>
    )
}

export default CartaoItem;




