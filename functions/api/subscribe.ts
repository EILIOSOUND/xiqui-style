export async function onRequestPost({ request, env }: any) {
  try {
    const apiKey = env.BREVO_API_KEY;
    const listId = env.BREVO_LIST_ID ? Number(env.BREVO_LIST_ID) : null;

    if (!apiKey) {
      return json({ success: false, error: 'BREVO_API_KEY manquante' }, 500);
    }

    const body = await request.text();
    const formData = new URLSearchParams(body);
    const email = formData.get('email')?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: 'Email invalide' }, 400);
    }

    const payload: any = {
      email,
      updateEnabled: true,
    };

    if (listId) {
      payload.listIds = [listId];
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();

      return json(
        {
          success: false,
          error: 'Erreur Brevo',
          details: errorText,
        },
        brevoResponse.status
      );
    }

    return json({ success: true }, 200);
  } catch (error: any) {
    return json(
      {
        success: false,
        error: error?.message || 'Erreur serveur',
      },
      500
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(),
      'Content-Type': 'application/json',
    },
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}