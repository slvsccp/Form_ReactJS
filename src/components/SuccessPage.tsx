import { useLocation } from "react-router-dom";

export function SuccessPage() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">Cadastro realizado com sucesso!</h1>
        <div className="mt-6"><strong>{formData.name}</strong>, obrigado por se cadastrar em nossa plataforma!</div>
      </div>
    </div>
  )
};