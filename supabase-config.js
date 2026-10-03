'use strict';

(function initializeOramachiSupabase(){
  const url = 'https://sqynqtdxpkuaxzhevpvp.supabase.co';
  const publishableKey = 'sb_publishable_5J9nwjVvvAdgCre9Rwnzug_3kINRvyo';

  if(!window.supabase || typeof window.supabase.createClient !== 'function'){
    console.error('おらマチ: Supabaseライブラリを読み込めませんでした。');
    return;
  }

  window.oramachiSupabase = window.supabase.createClient(url, publishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false
    }
  });
})();
