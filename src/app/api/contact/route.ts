export async function POST(req: Request) {
  if (!process.env.BREVO_API_KEY) {
    console.error('❌ La clé BREVO_API_KEY n’est pas définie !');
    return new Response(JSON.stringify({ message: 'Clé API manquante' }), { status: 500 });
  }

  const body = await req.json();
  console.log('Body reçu:', body);

  // Check RGPD avant d’envoyer l’email
  if (!body.rgpd) {
    console.warn('⚠️ RGPD non accepté, email non envoyé');
    return new Response(JSON.stringify({ message: 'RGPD non accepté' }), { status: 400 });
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Emilie - Portfolio', email: 'contact@87-03.org' },
        to: [{ email: 'contact@87-03.org', name: 'Emilie' }],
        subject: '✨ Nouvelle demande de contact via le portfolio',
        htmlContent: `
          <h2>Nouveau message reçu</h2>
          <p><strong>Nom :</strong> ${body.name}</p>
          <p><strong>Email :</strong> ${body.email}</p>
          <p><strong>Téléphone :</strong> ${body.phone}</p>
          <p><strong>Site web :</strong> ${body.website}</p>
          <p><strong>Statut :</strong> ${body.society}</p>
          <p><strong>Description :</strong><br/>${body.societyDes}</p>
          <p><strong>Budget :</strong> ${body.budget}</p>
          <p><strong>Deadline :</strong> ${body.deadline}</p>
          <p><strong>Options choisies :</strong><br/>
            ${body.cb1 ? '✔️ Plan 1<br/>' : ''}
            ${body.cb2 ? '✔️ Plan 2<br/>' : ''}
            ${body.cb3 ? '✔️ Plan 3<br/>' : ''}
            ${body.cb4 ? '✔️ À la carte<br/>' : ''}
          </p>
          <p><strong>Message :</strong><br/>${body.message}</p>
          <p><strong>RGPD :</strong> ${body.rgpd ? '✅ Oui' : '❌ Non'}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Brevo API error:', error);
      return new Response(JSON.stringify({ message: 'Erreur Brevo: ' + error }), { status: 500 });
    }

    console.log('✅ Email envoyé avec succès');
    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Erreur inattendue:', error);
    return new Response(JSON.stringify({ message: 'Erreur serveur interne' }), { status: 500 });
  }
}
