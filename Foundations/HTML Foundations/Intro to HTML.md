## HTML vs. CSS vs. JS

#### What is HTML?

- programming language that stands for HyperText Markup Language
- allows web developers and website owners to create the structure of their websites
- allows you as a website owner to create the basic structure of your website

#### What is CSS?

- style sheet language that's focused entirely on improving the presentation of HTML elements
- make your website appear visually pleasing and modern

#### What is JavaScript?

- gives you the tooles that you need to alter the behavior of different elements that are found on a website page
- manipulate the various interactive features of your website to perform a wide rage of actions

#### Exercises

##### 1. What do HTML and CSS stand for?

- HTML - HyperText Markup Language
- CSS - Cascading StyleSheets

##### 2. Between HTML and CSS, which would you use for putting paragraphs of text on a webpage?

- HTML

##### 3. Between HTML and CSS, which would you use for changing the font and background color of a button?

- CSS

##### 4. What is the difference between HTML, CSS, and JavaScript?

- HTML - create structure and content for websites
- CSS - style a website
- JS - add interactivity to your website

## Elements and Tags

- all elements of an HTML page are just peices of content wrapped in opening and closing HTML tags
- opening tags - a keyword enclosed in angle brackets <>
- closing tags - same as opening tags but have a foreward slash before the keyword
- elements are containers for content

#### Exercises

##### 1. What is an HTML tag

- a content wrapper

##### 2. What are the three parts of an HTML elements

- an opening tag, a closing tag, content


## Working with Text

- \<p> is used as a way of wrapping text as a paragraph element
- \<h1> to \<h6> is used to declare headings of different kinds
- \<strong> is used to display bold text
- \<em> is used to italicize text
- \<!--  --> is used to show comments

#### Exercises

##### How do you create a paragraph in HTML?

- \<p> \</p>

##### How do you create a heading in HTML?

- \<h1> \</h1>

##### How many different levels of headings are there and what is the difference between them?

- 6
- 1 is the strongest nad biggest and gets smaller as the number gets bigger

##### What element should you use to make text bold and important?

- \<strong> 

##### What element should you use to make text italicized to add emphasis to it?

- \<em>

##### What relationship does an element have with any nested elements within it?

- parent child

##### What relationship do two elements have if they are at the same level of nesting?

- parent - parent or child - child

##### How do you create HTML comments?

- \<!-- -->


## Lists

#### Unordered Lists

- \<ul> elements are used to create unordered lists
- \<li> elements are used to create list items

#### Ordered Lists

- \<ol> elements are used to create ordered lists
- \<li> elements are used to create list items


## Links and Images

#### Anchor Elements

- \<a> is used to create a link
- href attributes are used to link something to a anchor
- target attribute specifies where the linked resource will be opened
  - _self opens the link in the current tab
  - _blank opens in a new tab
- rel attribute descries the relation between the current page and the linked document
  - noopener - prevents the opened link from gaining access to the webpage from which it was opened
  - noreferrer - prevents the opened link from knowing which webpage or resource has a link to it
- absolute and relative links
  - absolute - links to other websites on the internet
  - relative - links to other pages within our own website

#### Images

- \<img> are used to display images
- alt attribute - used to describe an image, used in place if image cannot be loaded
- src attribute - source of image
- size attributes
  - height
  - width
