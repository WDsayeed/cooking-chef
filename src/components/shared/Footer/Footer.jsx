import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import logo from '../../../assets/barbecue-chef-scalable-vector-graphics-hat-png-favpng-nERQu9VTqK1aEzV0ZGyUerpQz.jpg'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-purple-100 text-base-content md:mx-auto">
      <div>
        <div className="flex items-center gap-3">
        <img className="w-20 rounded-xl h-14" src={logo} alt="" />
        
        <h2 className="text-xl">Cooking<span className="text-purple-700">Master</span></h2>
        </div>
        <p className="p-3">
          I provide new recipes with a twist on daily basis. I also <br /> post
          blog posts about fun ideas to do in the kitchen
        </p>
        <div>
        <div  className="flex gap-2">
        <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-purple-200">
        <FaGoogle className="w-8  h-5"></FaGoogle>
        </div>
        <div className=" w-10 h-10 flex justify-center items-center rounded-full bg-purple-200">
        <FaGithub className="w-8 h-5"></FaGithub>
        </div>
        </div>
      </div>
      </div>
      <div>
        <span className="footer-title text-lg">Recipes</span>
        <a className="link link-hover">Breakfast</a>
        <a className="link link-hover">Dessert</a>
        <a className="link link-hover">Dinner</a>
        <a className="link link-hover">Dairy</a>
      </div>
      <div>
        <span className="footer-title text-lg">Legal</span>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Refund Policy</a>
        <a className="link link-hover">Cookie Policy</a>
        <a className="link link-hover">Terms and Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
