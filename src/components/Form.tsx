import React, { ChangeEvent } from "react";
import { FormData } from "@/app/interfaces/FormData";

interface FormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function Form({ formData, setFormData }: FormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
        <input
          type="text"
          name="causa"
          value={formData.causa}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">N° Proceso:</label>
        <input
          type="text"
          name="numeroProceso"
          value={formData.numeroProceso}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
    </form>
  );
}
