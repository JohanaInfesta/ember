import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  model(params){

    let requestUrl = 'https://gateway.marvel.com:443/v1/public/characters/' +
    params.personaje_id + '?apikey=6b4e24ceb63521fdaf4ae2b29c5accb6';
    return this.get('ajax').request(requestUrl);
  }
});
