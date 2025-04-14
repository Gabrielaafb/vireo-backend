export const validarCampos = (camposRequeridos) => {
    return (req, res, next) => {
      const errores = [];
      camposRequeridos.forEach((campo) => {
        if (!req.body[campo]) {
          errores.push(`${campo} es obligatorio.`);
        }
      });
  
      if (errores.length > 0) {
        return res.status(400).json({ errores });
      }
  
      next();
    };
  };
  