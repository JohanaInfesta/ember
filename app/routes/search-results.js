import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  model(params, transition){
    console.log(transition.queryParams['name']);

    let requestUrl = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' +
    transition.queryParams['name'] + '&apikey=6b4e24ceb63521fdaf4ae2b29c5accb6';
    return this.get('ajax').request(requestUrl);

    // return[{
    //   name:'Thor',
    //   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD01BaaGXp_Bs5zAvPm8Xu_8a1wzsT1cP2b-RRmTNARjLMFS9D',
    //   description:'anda?'},
    //   {
    //     name:'Capitan America',
    //     image:'https://images-na.ssl-images-amazon.com/images/I/71HIeG-PkzL._SY679_.jpg',
    //     description:'anda?'
    //   }]
  }
});
