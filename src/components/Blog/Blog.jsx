import React from 'react';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
    <ReactToPdf targetRef={ref} filename="blog.pdf">
        {({toPdf}) => (
            <button className='btn hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white flex absolute left-[50%] top-24 text-center ' onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div className="container mx-auto mb-11 mt-32"  ref={ref}>
    
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          1. Differences between uncontrolled and controlled components.
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Controlled components
          mention to components that have their state and ways controlled by
          the parent component. Uncontrolled components directly access and modify the DOM without using React's state management tools, while controlled components are managed by React's state . Controlled components are updated by React and re-render themselves based on changes to their state, while uncontrolled components do not. Uncontrolled
          components refer to components that manage their own state inwardly.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          2. How to validate React props using PropTypes?
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Props are an important
          mechanism for passing the read-only attributes to React components.
          When a prop is passed to  component, PropTypes will validate its type and issue a warning in the console if it doesn't match the expected type or if it's missing.
          The props are usually required to use correctly in the component. If
          it is not used correctly, the components may not behave as expected.
          Hence, it is required to use props validation in improving react
          components.Props validation is a tool that will help the developers to
          avoid future bugs and problems. It is a useful way to force the
          correct usage of the components. 
          However, if you use propTypes with components, it helps to
          avoid unexpected bugs.Using PropTypes can help to catch bugs and ensure that the components receive the correct types of props.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          3. Difference between nodejs and express js.
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Express is a minimal
          and flexible.  node.js web application framework, providing a robust
          set of features for building single and multi-page, and hybrid web
          applications.Node.js is a JavaScript runtime environment, while Express.js is a web application framework built on top of Node.js. Node.js provides the underlying platform for building network applications, while Express.js provides a set of tools and features to make building web applications easier and more efficient.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> A custom hook is a JavaScript function in React that uses React's built-in hooks to provide reusable logic and stateful behavior across multiple components. Custom hooks allow developers to extract and reuse complex logic that can be shared among multiple components.
          Usually, if there is a requirement to add a feature, one can install a
          third-party library and solve the problem.
        </p>
      </div>
    </div>
    </div>

  );
};

export default Blog;
