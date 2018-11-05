import Component from '@ember/component';
import layout from '../templates/components/el-submenu';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['el-submenu'],
  classNameBindings: ['isOpen:is-opened'],

  isOpen: false,



  actions:{
    collapse(){
      this.toggleProperty('isOpen');
    }
  }
});
