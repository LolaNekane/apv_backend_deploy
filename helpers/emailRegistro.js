import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
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
        subject: "Comprueba tu cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `
            <p>Hola, ${nombre}.</p> 
            <p>Comprueba tu cuenta en APV</p>
            <p>Tu cuenta ya está lista, tienes que confirmarla en el siguiente enlace: 
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a></p>
            <p>Si no has creado una cuenta, ignora este correo</p>
        `
      });

      console.log('Mensaje enviado: %s', info.messageId);
};

export default emailRegistro;