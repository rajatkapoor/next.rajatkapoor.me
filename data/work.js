import mocklyImage from "../assets/mockly-a.png";
import timelyImage from "../assets/timely-b.png";
import scirubyImage from "../assets/sciruby-b.png";
import simpleCVImage from "../assets/simplecv-a.png";
import rangeitImage from "../assets/rangeit-a.png";
import ltkImage from "../assets/ltk-d.png";

export const WORKS = [
  {
    slug: "mockly",
    id: "mockly",
    title: "Mockly",
    text: "Mockly is a easy to use ebook mockup generator. Perfect for generating simple 3d mockups for your info products and ebooks",
    imgSrc: mocklyImage,
    imgAlt: "Mockly image",
    tags: ["react", "firebase", "ebooks", "product hunt #1"],
  },
  {
    slug: "timely",
    id: "timely",
    title: "Timely",
    text: "Timely is a slack app that autoconverts timezones in your chat messages. Just install and forget. It converts times into timezones of all people in the conversaiton and privately notifies them of the time in their respective timezones",
    imgSrc: timelyImage,
    imgAlt: "timely image",
    tags: ["slack", "timezone", "remote life"],
  },
  {
    slug: "letthemkill",
    id: "letthemkill",
    title: "Let them kill",
    text: "Fast-paced, endless game where you let the enemies shoot bullets and kill each other while you escape your enemies and their bullets",
    imgSrc: ltkImage,
    imgAlt: "let them kill image",
    tags: ["game dev", "unity", "android"],
  },
  {
    slug: "gsoc-ruby",
    id: "gsoc-ruby",
    title: "Ruby Science Foundation",
    text: "Worked on the integration, minimizations and matrix libraries using Ruby and C++ adding more feature and support for using GNU Scientific Libraries for faster computations",
    imgSrc: scirubyImage,
    imgAlt: "simple cv image",
    tags: ["GSoC", "open source", "ruby", "c++"],
  },
  {
    slug: "range-it",
    id: "range-it",
    title: "Range-IT",
    text: "Created the vision system of Range-IT Project to create a standalone, wearable, assistive device which processed stereo data in real time to extend the mobility of visually impaired people in an indoor environment at Human-Computer Interaction Lab, TU Dresden",
    imgSrc: rangeitImage,
    imgAlt: "range it project",
    tags: ["python", "computer vision", "pointcloud", "research"],
  },
  {
    slug: "gsoc-simplecv",
    id: "gsoc-simplecv",
    title: "Simple CV",
    text: "Worked on creating an interactive rendering system for SimpleCV which made it independent of the obsolete PyGame library. Developed the system using PyGTK and Cairo, along with a web counterpart compatible with IPython Notebooks using JavaScript and Processing.js",
    imgSrc: simpleCVImage,
    imgAlt: "simple cv image",
    tags: ["GSoC", "open source", "python", "c++"],
  },
];
