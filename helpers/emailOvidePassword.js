import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const { email, nombre, token } = datos;

      // Enviar email
      const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: `
            <p>Hola, ${nombre}.</p> 
            <p>Has solicitado cambiar la contraseña.</p>
            <p>Pulsa en el siguiente enlace para cambiar la contraseña: 
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a></p>
            <p>Si no has solicitado el cambio de contraseña, ignora este correo</p>
        `
      });

      console.log('Mensaje enviado: %s', info.messageId);
};

export default emailOlvidePassword;