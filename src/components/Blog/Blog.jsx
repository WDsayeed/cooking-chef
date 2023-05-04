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
          1. Differences between uncontrolled and controlled components
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Controlled components
          mention to components that have their state and ways controlled by
          the parent component. These components depend on props passed down from
          the parent component to update their state and behavior. Uncontrolled
          components refer to components that manage their own state internally.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          2. How to validate React props using PropTypes
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Props are an important
          mechanism for passing the read-only attributes to React components.
          The props are usually required to use correctly in the component. If
          it is not used correctly, the components may not behave as expected.
          Hence, it is required to use props validation in improving react
          components.Props validation is a tool that will help the developers to
          avoid future bugs and problems. It is a useful way to force the
          correct usage of your components. It makes your code more readable.
          React components used special property PropTypes that help you to
          catch bugs by validating data types of values passed through props,
          although it is not necessary to define components with propTypes.
          However, if you use propTypes with your components, it helps you to
          avoid unexpected bugs.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          3. Difference between nodejs and express js.
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Express is a minimal
          and flexible node. js web application framework, providing a robust
          set of features for building single and multi-page, and hybrid web
          applications. On the other hand, Node. js is detailed as "A platform
          built on Chrome's JavaScript runtime for easily building fast,
          scalable network applications".
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          {" "}
          <span className="font-semibold">Answer:</span> Custom React JS hooks
          are reusable functions that a React JS software developer can use to
          add special and unique functionality to the React applications.
          Usually, if there is a requirement to add a feature, one can install a
          third-party library and solve the problem.
        </p>
      </div>
    </div>
    </div>

  );
};

export default Blog;
