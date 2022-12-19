import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

const MostrarFavoritas = () => {

  const { user } = useAuth();
  console.log(user.email)
  //1 configuración de los hook de mostrar

  const [favoritas, setFavoritas] = useState([]);

  //2 referenciar la db de firebase

  const favoritasCollection = query(
    collection(db, "Favoritas"),
    where("id_user", "==", user.email)
  );

  //3 creamos la funcionabilidad para mostrar los documentos con asincronismo

  const getFavoritas = async () => {
    const data = await getDocs(favoritasCollection);
    //console.log(data.docs);

    setFavoritas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(favoritas);
  };

  //4 declaración función delete para eliminar registros

  const deleteFavorita = async (id) => {
    const favoritaDoc = doc(db, "Favoritas", id);
    await deleteDoc(favoritaDoc);
    getFavoritas();
  };

  //5 configuración sweetalert
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Eliminar de favoritas?",
      text: "Seguro de querer eliminarla!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFavorita(id);
        Swal.fire("Eliminada", "La película fue eliminada.", "Listo");
      }
    });
  };

  //6 declaramos el useEffect

  useEffect(() => {
    getFavoritas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //7 mostrar datos en estructura

  const navigate = useNavigate();
  const volver = (e) => {
    navigate('/')
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>id_movie</th>
                <th>title</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {favoritas.map((fav) => (
                <tr key={fav.id}>
                  <td key={fav.id_movie} className="text-light">
                    {fav.id_movie}
                  </td>
                  <td key={fav.title} className="text-light">
                    {fav.title}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        confirmDelete(fav.id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button id="btnAnterior" onClick={volver}>
          <i data-id="prev" class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    </div>
  );
};

export default MostrarFavoritas;
