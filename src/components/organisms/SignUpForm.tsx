import { useState } from "react";
import { InputWithLabel } from "../molecules/InputWithLabel";
import { Link, useNavigate } from "react-router";
import { Button } from "../atoms/Button";

export const SignUpFrom = () => {
  const navigate = useNavigate();
  const [formaData, setFormaData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormaData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formaData.password !== formaData.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_API_URL +"/users/signup", {
        method: "POST",
        body: JSON.stringify(formaData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al crear la cuenta", errorData);
        throw new Error("Error al crear la cuenta");
      }
      await response.json();
      navigate("/login");
    } catch (error) {
      console.error("Error al crear la cuenta", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 w-full max-w-md">
        <InputWithLabel
          classNameLable="block text-sm font-medium text-left"
          classNameInput="transition-colors"
          lable="Nombre completo"
          id="name"
          value={formaData.name}
          onChange={(e) => handleChange("name", e)}
        />
        <InputWithLabel
          classNameLable="block text-sm font-medium text-left"
          classNameInput="transition-colors"
          lable="Correo electronico"
          id="email"
          value={formaData.email}
          onChange={(e) => handleChange("email", e)}
        />
        <InputWithLabel
          classNameLable="block text-sm font-medium text-left"
          classNameInput="transition-colors"
          lable="contraseña"
          id="password"
          type="password"
          value={formaData.password}
          onChange={(e) => handleChange("password", e)}
        />
        <InputWithLabel
          classNameLable="block text-sm font-medium text-left"
          classNameInput="transition-colors"
          lable="Confirmar contraseña"
          id="confirmPassword"
          type="password"
          value={formaData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e)}
        />

        <div className="flex flex-col space-y-4 items-center p-6 pt-0">
          <Button
            className="btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
