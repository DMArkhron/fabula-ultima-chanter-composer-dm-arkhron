const ID = 'fabula-ultima-chanter-composer-dm-arkhron';
Hooks.once('init', () => {
  game.settings.register(ID, 'language', {
    name: 'Idioma do módulo / Module language',
    hint: 'Escolha o idioma do compositor e das novas canções no chat. / Choose the language of the composer and new song messages.',
    scope: 'client', config: true, type: String,
    choices: {pt: 'Português (Brasil)', en: 'English'}, default: 'en', requiresReload: true
  });
});
Hooks.once('ready', async () => {
  const language = game.settings.get(ID, 'language') === 'pt' ? 'pt' : 'en';
  await import(`./chanter-${language}.js`);
  ui.cards?.render(true);
});
