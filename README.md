# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/Nathan-s-Anthony/bookmark-landing-page)
- Live Site URL: [Add live site URL here](https://bookmark-landing-page-nathan.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Gatsby.js](https://www.gatsbyjs.com/) - React framework
- [SASS](https://sass-lang.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
I learnt how to map data to sub components to create a more clean and concise codebase.
See below for a code snippet:

```js
{
  tabs.map((tab, index) => (
    <Tab
      key={index}
      link={tab.url}
      title={tab.title}
      active={index === activeTab}
      onClick={() => onTabClick(index)}
    />
  ));
}
```

### Continued development

I plan to turn this bookmark landing page into a full fledged website ,with login capabilities that takes the user to a dashboard.

### Useful resources

- [Stackoverflow](https://www.example.com) - Solutions posted on stackoverflow assisted me in a lot of challenges that i encountered with a lot of javascript related logic.
- [Log Rocket](https://blog.logrocket.com/how-to-build-tab-component-react/) - This blog post helped me in creeating tab components in react.
- [Gatsby Documentation](https://www.example.com) - The official gatsby documentation helped me setup up the meta data with react-helmet as well adding images to the project.

## Author

- Website - [Nathan Anthony](https://nathandev.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
