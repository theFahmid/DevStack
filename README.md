# DevStack
DevStack is a responsive React-based webapp, which helps users to explore popular web development technologies and build their personalized tech-stack. 

**Live Link:** https://thefahmid-devstack.netlify.app/

## Tech Stack
- **Language:** HTML, CSS, TypeScript
- **Frontend:** React + Vite + Tailwind CSS 
- **Hosting:** Netlify 
- **Library:** React-Toastify
## Features
- Explore popular technologies and get an overview about them
- Select and build personalized tech-stack

## Installations
**Clone the repository**
```
git clone https://github.com/theFahmid/DevStack
```
**Install Dependencies**
```
cd DevStack && npm install
```

### Development
```
npm run dev
```
### Production Build
```
npm run build && npm run serve
```
## React Questions

**1. What is JSX, and why is it used in React?**  
The fullform of JSX is JavaScript XML. It is an syntax extension of JavaScript to write HTML code directly in JavaScript files. It is popularly used in React to write readable HTML Code in JS. It also makes it easier to inject JavaScript values/expressions in the document.

**2. What is the difference between props and state?**  
Props are data passed from a parent component to child component, similar to arguments passed to a function. On the other hand, state is managed by a component and its value is changed by using a setter functions. The component rerenders if the value of the state changes.

**3. What does the `useState` hook do, and where did you use it in this project?**  
The `useState` hook allows a component to remember data, such as - loading state, user selection etc. In this project I used `useState` to remember what technologies the user selects.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**  
The `useEffect` hook causes side-effects in React Components. It runs initially as the component loads. We can control when it will run again using dependency array. I used `suspense` instead of `useEffect` while loading the JSON data, but I could have used `useEffect` also. It would have allowed me to show the technology cards after the data was loaded.

**5. Why does every item in a `.map()` list need a unique key prop?**  
React uses `key` to identify each item in a list. So when the list changes, React can easily identify and update only the necessary things, instead of making many unnecessary re-renders. It makes React render and update elements faster.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**  
When the rendering of an element depends on a condition, it is called conditional rendering. For displaying the selected stack, if any technologies were selected I would show them, otherwise if none were selected, I showed the message "No technologies selected yet"

```tsx
<p>
  {selectedStack.length === 0
    ? "No technologies selected yet."
    : `${selectedStack.length} Technology Selected`}
</p>
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
I can pass data from a parent component to a child component by using props. But as React is uni-directional, a child component can't directly pass data to the parent component. So, when passing a prop from a parent to a child, I can pass a callback function by using which a child can send back something to the parent component.