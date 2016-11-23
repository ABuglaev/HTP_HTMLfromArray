'use strict';
var array = [
  {tag: 'div', options: {attributes: {id: 'div1', class: 'class1'}, children: [
    {tag: 'ul', options: {attributes: {style: 'display: inline-block'}, children: [
      {tag: 'li', options: {children: [
        {tag: 'span', options: {text: 'text'}}
      ]}},
      {tag: 'li', options: {children: [
        {tag: 'span', options: {text: 'text'}}
      ]}},
      {tag: 'li', options: {children: [
        {tag: 'span', options: {text: 'text'}}
      ]}}
    ]}},
    {tag: 'p', options: {text: 'text text text'}},
    {tag: 'form', options: {attributes: {id: 'form1', name: 'form', method: 'POST', action: '/process'}, children: [
      {tag: 'label', options: {attributes: {for: 'i1'}, text: 'label1'}},
      {tag: 'input', options: {attributes: {value: 'test', type: 'text', id: 'i1'}}},
      {tag: 'label', options: {attributes: {for: 'i2'}, text: 'label2'}},
      {tag: 'input', options: {attributes: {value: 'test', type: 'text', id: 'i2'}}},
      {tag: 'input', options: {attributes: {placeholder: 'test', type: 'text'}}},
      {tag: 'input', options: {attributes: {value: '1', type: 'checkbox', checked: 'checked'}}},
      {tag: 'br'},
      {tag: 'select', options: {children: [
        {tag: 'option', options: {attributes: {value: 1}, text: 'op1'}},
        {tag: 'option', options: {attributes: {value: 1}, text: 'op2'}},
        {tag: 'option', options: {attributes: {value: 1}, text: 'op3'}},
        {tag: 'option', options: {attributes: {value: 1}, text: 'op4'}}
      ]}}
    ]}}
  ]}}
];
var createHTML;

createHTML = function( _array, _parent) {
  var element, text;

for (var i = 0; i < _array.length; i++) {

  element = document.createElement(_array[i]['tag']);
  _parent.appendChild(element);

  if ('options' in _array[i]) {
    if ('attributes' in _array[i]['options']) {
      for (K in _array[i]['attributes']) {
        element.setAttribute(K, _array[i]['attributes'][K]);
      };
    };

    if ('text' in _array[i]['options']) {               
    text = document.createTextNode(_array[i]['options']['text']);
    element.appendChild(text);
    };

    if ('children' in _array[i]['options']) {
      createHTML(_array[i]['options']['children'], element);
    };
  };

};

};

createHTML(array, document.body);