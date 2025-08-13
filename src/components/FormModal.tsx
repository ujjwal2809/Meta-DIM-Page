import React, { useState } from "react";
import { Phone, Play, X, CheckCircle, Award, Users, Code, Star, ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Learn From Industry Experts
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Experience Level</option>
              <option value="student">Student</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1-3 Years</option>
              <option value="3+">3+ Years</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Get Free Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
