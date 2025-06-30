// src/app/api/contact/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Données reçues :", body);

    // Tu peux ajouter ici une logique de validation, envoi d'email, etc.

    return new Response(
      JSON.stringify({ message: "Formulaire reçu avec succès ✨" }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error("Erreur API contact :", error);
    return new Response(
      JSON.stringify({ message: "Erreur serveur. Réessaye plus tard." }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
