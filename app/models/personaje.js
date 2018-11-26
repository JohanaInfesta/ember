import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  description: DS.attr(),
  // age: DS.attr('number'),
  image: computed('path','extension', function(){
    return path + '.' + extension;
  })
});
