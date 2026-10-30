// Foundry VTT Script Macro: Fabula Ultima - Chanter Composer
const moduleId = 'fabula-ultima-chanter-composer-dm-arkhron';
const api = game.modules.get(moduleId)?.api;
if (!api?.open) {
  ui.notifications.warn('Chanter Composer is not active or has not finished loading.');
} else {
  const actor = (typeof token !== 'undefined' ? token?.actor : null)
    ?? canvas?.tokens?.controlled?.[0]?.actor
    ?? game.user.character;
  if (!actor || actor.type !== 'character' || (!game.user.isGM && !actor.isOwner)) {
    ui.notifications.warn('Select your character token or assign a character to your user first.');
  } else {
    api.open(actor);
  }
}
