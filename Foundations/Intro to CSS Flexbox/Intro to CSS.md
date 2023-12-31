## Intro to CSS

- rules are made up of a selector and a semicolon-seperated list of declerations, with each of those declerations being made up of a property value pair

#### Selectors

- Universal Selector

  - * refers to every element
- Type selectors

  - element selectors will select all elements of the given element type and the syntax is just the name of the element
- Class selectors

  - select all elements wit the given class
  - classes are attributes you add to HTML elements
  - syntax is a period and the class name
- ID selectors

  - similiar to class selectors, but work with elements of a given ID which is another attribute which can be added to HTML elements
- Commas can be used to group several selectors together with the same CSS components
- Chaining selectors

  - chain two classes together to be more specific
- Descendant combinator

  - adding a space between two selectors can take advantage of the parent child relationship between elements

#### Properties to get started with

- Color and background color
  - color - sets an element's text color
  - background-color - sets background color of an element
  - accept HEX, RGB, and HSL values
- Typography basics and text-align
  - font-family - determines what font an element uses
  - font-size - sets the size of the font
  - font-weight - affects the boldness of text
  - text-align - align text horizontally ithin an element
- Image height and width
  - height
  - width
- Adding CSS to HTML
  - External CSS
    - create a seperate CSS file and link it to the HTML file
  - Internal CSS
    - happens in the head tags of your HTML file
  - Inline CSS
    - adds style directly to HTML elements

## Cascade of CSS

#### Specificity 

- ID selectors (most specific)
- Class Selectors
- Type Selectors

#### Inheritance

- when applies to an element, inherited by that element's descendants

#### Rule order

- whichever ruule was defined last

## Box Model

- every single thing on a webage is a rectangular box
  - boxes can hae other boxes in them and can sit alongside one anoher
- padding - increases the space between the border of a box and the content of the box
- margin - increases the space between the borders of a box and the borders of adjacent boces
- border - adds aspace between the margin and the padding
