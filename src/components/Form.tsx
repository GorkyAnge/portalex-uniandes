import React, { ChangeEvent } from "react";
import { FormData } from "@/app/interfaces/FormData";

interface FormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const causas = [
  "ACTIVACIÓN CÓDIGO SUPA",
  "ALIMENTOS",
  "DIVORCIO POR CAUSAL",
  "EXTINCIÓN PENSIÓN ALIMENTICIA",
  "INCIDENTE DE AUMENTO DE PENSIONES ALIMENTICIAS",
  "MEDIDAS DE PROTECCIÓN",
  "VIOLENCIA INTRAFAMILIAR",
];

export default function Form({ formData, setFormData }: FormProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.toUpperCase(),
    }));
  };

  const handleCausaChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name === "causa") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        causa: value,
        causaPersonalizada: value === "otro" ? "" : ("" as string),
      }));
    } else if (name === "causaPersonalizada") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        causaPersonalizada: value.toUpperCase(),
      }));
    }
  };

  return (
    <form className="w-1/2">
      <div className="mb-4">
        <label className="block text-gray-700">Número:</label>
        <input
          type="text"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="001-2024-CT"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Usuario:</label>
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Actor:</label>
        <input
          type="text"
          name="actor"
          value={formData.actor}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Demandado:</label>
        <input
          type="text"
          name="demandado"
          value={formData.demandado}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Causa:</label>
        <select
          name="causa"
          value={formData.causa}
          onChange={handleCausaChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Selecciona una causa</option>
          {causas.map((causa, index) => (
            <option key={index} value={causa}>
              {causa}
            </option>
          ))}
          <option value="otro">Otra (especificar)</option>
        </select>
        {formData.causa === "otro" && (
          <input
            type="text"
            name="causaPersonalizada"
            value={formData.causaPersonalizada || ""}
            onChange={handleCausaChange}
            className="w-full mt-2 px-3 py-2 border rounded"
            placeholder="Especifica la causa"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">N° Proceso:</label>
        <input
          type="text"
          name="numeroProceso"
          value={formData.numeroProceso}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="00001-2024-00001"
        />
      </div>
    </form>
  );
}
