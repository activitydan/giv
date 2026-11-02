// Chiamata ogni giorno da Vercel (vedi vercel.json): fa una richiesta al database
// così il progetto Supabase gratuito non va in pausa per inattività.
// Usa solo la chiave pubblica, la stessa già presente in index.html.
const SUPABASE_URL = 'https://jhvlvqtoawfxhjxmgvrt.supabase.co';
const SUPABASE_KEY = 'sb_publishable_JKT7N3iewdpE2AxG42zqTw_lx69ozEj';

module.exports = async (req, res) => {
  try {
    const r = await fetch(SUPABASE_URL + '/rest/v1/rpc/sveglia', {
      method: 'POST',
      headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: '{}'
    });
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, stato: r.status });
  } catch (err) {
    res.status(502).json({ ok: false, errore: String(err && err.message || err) });
  }
};
