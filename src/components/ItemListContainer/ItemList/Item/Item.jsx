import "./style/Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import ButtonAdd from "../../../ButtonAdd/ButtonAdd";

const Item = ({ product }) => {
  return (
    <>
      <div className="col">
        <div className="card cardProduct h-100">
          <div className="overFlowImgProduct">
            <Link to={`/detail/${product.id}`}>
              <img
                src={product.img}
                className="card-img-top productIMG"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-header mt-2 border-0 bg-transparent">
            <h5 className="card-title titleProduct">
              <Link className="LinkTitleProduct" to={`/detail/${product.id}`}>
                {product.nombre}
              </Link>
            </h5>
          </div>
          <div className="card-body pt-0">
            <h6 className="card-title precioProducto precioReal">
              <s>${product.pReal.toLocaleString()} MXN</s>
            </h6>
            <h6 className="card-text precioProducto">
              ${product.pDescuento.toLocaleString()} MXN
            </h6>
            <p className="card-text stockProduct">
              Disponibles: {product.stock}pzs.
            </p>
          </div>
          <div className="card-footer border-0 bg-transparent pt-0">
            <p className="card-text detailProduct text-muted">
              <Link to={`/detail/${product.id}`} className="LinkDetalles">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" /> Detalles
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;