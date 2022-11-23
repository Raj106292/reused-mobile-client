import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-secondary underline underline-offset-8">Frequently asked question:</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
                    <Disclosure as="div">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What are the different ways to manage a state in a React application?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    There are four main types of state you need to properly manage in your React apps:
                                    <ol>
                                        <li> 1. Local State</li>
                                        <li> 2. Global State</li>
                                        <li> 3. Server State</li>
                                        <li> 4. Url State</li>
                                    </ol><br />
                                    <div>
                                        <strong>Local State</strong>
                                        <p>
                                            Local state is data we manage in one or another component. Local state is most often managed in React using the useState() hook.
                                        </p>
                                    </div><br />
                                    <div>
                                        <strong>Global State</strong>
                                        <p>
                                            Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                                        </p>
                                    </div><br />
                                    <div>
                                        <strong>Server State</strong>
                                        <p>
                                            Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                                        </p>
                                    </div><br />
                                    <div>
                                        <strong>Url State</strong>
                                        <p>
                                            Data that exists on our URLs, including the pathname and query parameters.
                                        </p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-3">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>How does prototypical inheritance work?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-3">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is a unit test? Why should we write unit tests?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <p>
                                        Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props. In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on.
                                    </p><br />
                                    <p>
                                        There are many opinions on when you should write unit tests. The school of test-driven development (TDD) tells us to write tests before writing a single line of code, others prefer to write unit tests during or even after the code has been written. I think that the biggest advantage of unit tests is when you write tests during or before the actual implementation, but this doesn't mean you should always follow this advice.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-3">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>React vs. Angular vs. Vue?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div>
                                        <strong className='underline underline-offset-4'>Angular vs React</strong>
                                        <p>
                                            React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                                        </p>
                                    </div><br />
                                    <div>
                                        <strong className='underline underline-offset-4'>React vs Vue</strong>
                                        <p>
                                            React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                                        </p>
                                    </div><br />
                                    <div>
                                        <strong className='underline underline-offset-4'>Angular vs Vue</strong>
                                        <p>
                                            A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps. It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                                        </p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    );
};

export default Blogs;