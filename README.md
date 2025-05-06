# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./multi-step-form.png)

### Links

- Solution URL: [https://github.com/dainty92/multi-step-form](https://github.com/dainty92/multi-step-form)
- Live Site URL: [https://multi-step-form-wheat-chi.vercel.app/](https://multi-step-form-wheat-chi.vercel.app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Flexbox & CSS Grid
- React (with useState)
- Mobile-first responsive design
- Vite + React for fast local development

### What I learned

This project helped me better structure a **multi-step form with navigation logic**, conditional rendering, and shared state between components. I also practiced:

```js
// React state for step control
const [currentStep, setCurrentStep] = useState(1);

// Updating selected plan with visual feedback
<div
  onClick={() => setSelectedPlan(plan.id)}
  className={`${selectedPlan === plan.id ? "border-marine bg-magnolia" : "border-lightGray hover:border-marine"}`}
/>
```
I also refined my Tailwind CSS skills, especially using utility-first styling for layout and hover states.

### Continued development
I plan to explore:

Form handling with React Hook Form for better validation

Using Context API or Zustand to manage multi-step form state globally

Adding animations between form transitions

Writing unit and integration tests

### Useful resources
Tailwind CSS Docs - [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite) – for responsive design and hover/focus states.

### Author
Website – Esther Ajayi

Frontend Mentor – @esther-must

Twitter – @adexdainty92

### Acknowledgments
Special thanks to the Frontend Mentor community for providing detailed feedback and helpful inspiration. I also drew interface inspiration from some top solutions shared on the challenge page.