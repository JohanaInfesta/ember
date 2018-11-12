import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition){
  console.log(transition.queryParams['name']);
    return[{
      name:'Thor',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD01BaaGXp_Bs5zAvPm8Xu_8a1wzsT1cP2b-RRmTNARjLMFS9D',
      description:'anda?'},
      {
        name:'Capitan America',
        image:'https://images-na.ssl-images-amazon.com/images/I/71HIeG-PkzL._SY679_.jpg',
        description:'anda?'
      }]
    }
  });
