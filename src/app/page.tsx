"use client";
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "@/components/PDF"; // El componente PDF donde definirás cómo se ve el PDF
import Form from "@/components/Form";
import useClient from "@/hooks/useClient";
import Button from "@/components/Button";

export default function Home() {
  const isClient = useClient();

  const [formData, setFormData] = useState({
    numero: "",
    usuario: "",
    actor: "",
    demandado: "",
    causa: "",
    causaPersonalizada: "",
    numeroProceso: "",
  });

  // Función para generar el nombre del archivo
  const generateFileName = () => {
    const { numeroProceso, usuario, causa } = formData;
    const sanitizedUsuario = usuario.replace(/[^a-zA-Z0-9]/g, "_"); // Reemplaza caracteres no permitidos en nombres de archivo
    const sanitizedCausa = causa.replace(/[^a-zA-Z0-9]/g, "_"); // Reemplaza caracteres no permitidos en nombres de archivo
    return `${sanitizedUsuario}_${sanitizedCausa}_${numeroProceso}.pdf`;
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-2xl font-bold mb-5 text-[#0c356a]">
        GENERADOR DE PORTADAS DE PROCESOS LEGALES
      </h1>
      <Form formData={formData} setFormData={setFormData} />

      {isClient && (
        <PDFDownloadLink
          document={<PDF formData={formData} />}
          fileName={generateFileName()} // Usa la función para establecer el nombre del archivo
        >
          {({ loading }) =>
            loading ? (
              <Button>Cargando Documento...</Button>
            ) : (
              <Button>Descargar Documento</Button>
            )
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
