import type React from "react";
import { InputWithLabel } from "../molecules/InputWithLabel";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { AlertCircle } from "lucide-react";

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [formaData, setFormaData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/users/signin",
        {
          method: "POST",
          body: JSON.stringify(formaData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        alert("Error al iniciar sesion");
        return
      }
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
      setError(
        JSON.stringify(
          "Error al iniciar sesión. Por favor, intenta de nuevo."
        ));
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormaData((prev) => ({ ...prev, [key]: value }));
    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-in fade-in slide-in-from-top-1 duration-300">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
      <div className="space-y-6 w-full max-w-md">
        <InputWithLabel
          classNameLable="block text-sm font-medium text-left"
          classNameInput="transition-colors"
          lable="email"
          id="email"
          type="email"
          placeholder="tu@correo.com"
          value={formaData.email}
          onChange={(value) => handleChange("email", value)}
        />
        <div className="space-y-2">
          <InputWithLabel
            classNameLable="block text-sm font-medium text-left"
            classNameInput="transition-colors"
            lable="Contraseña"
            id="password"
            type="password"
            value={formaData.password}
            onChange={(value) => handleChange("password", value)}
          />
          <div className="flex justify-between items-center">
            <Link to="#" className="text-xs text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-4 items-center p-6 pt-0">
          <Button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            ¿No tienes cuenta?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
