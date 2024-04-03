import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

(async function () {
  console.log(import.meta.env.RESEND_API_KEY);
  console.log(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['cristiandavidlaguna.97@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();