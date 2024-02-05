import { BotonVecino } from "./botonVecino";

const Vecinos = ({ listadoVecinos }) => {
  console.log('logvecinos',listadoVecinos);
  return (
    <div className="contenedor-vecinos">
      <h2>vecino{listadoVecinos}</h2>
      <ul>
        {listadoVecinos?.map((el) => (
          <li key={el}>
            <BotonVecino codigoVecino={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Vecinos };
