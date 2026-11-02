// ====== CONFIGURACIÓN DE SENDA PYTHON ======
// 1. Crea un proyecto gratis en https://supabase.com
// 2. En el panel: Project Settings → API (o "Data API" / "API Keys"),
//    copia la "Project URL" y la clave pública "anon" / "publishable".
// 3. Pégalas aquí abajo. La clave anon es pública: está pensada para ir en la web.
//    NUNCA pongas aquí la clave "service_role" / "secret".
window.SENDA_CONFIG = {
  SUPABASE_URL: "https://vlzxxcrprwspcdjhrdsh.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_Zqm1Z8L0FMknelJFFUMiPQ_ZcNixnDQ",

  // Botones de acceso social que se muestran. Quita los que no actives en Supabase.
  // Para X: usa "x" si en Supabase activaste "X / Twitter (OAuth 2.0)", o "twitter" si es el antiguo.
  PROVEEDORES: ["google", "facebook", "x"],

  // true = hay que iniciar sesión para usar la plataforma (útil cuando cobres suscripción)
  LOGIN_OBLIGATORIO: false
};
