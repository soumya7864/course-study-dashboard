import HTML from "../assets/html-5.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import JS from "../assets/javascript.png";
import DSA from "../assets/flowchart.png";
import Avatar from "../assets/avatar.svg";
export const INSTRUCTORS_DATA = [
  {
    id: "i1",
    name: "John Doe",
    students: 468,
    image: Avatar,
    totalHours: 1320,
    courses: [
      { id: "coi1", icon: HTML, course: "HTML5" },
      { id: "coi2", icon: CSS, course: "CSS3" },
      { id: "coi3", icon: JS, course: "JavaScript" },
      { id: "coi4", icon: REACT, course: "ReactJS" },
    ],
    tagline: "Proin ornare ullamcorper sem at blandit.Vestibulum sit amet",
    about:
      "Maecenas venenatis nunc eget risus eleifend porttitor. Aliquam finibus, nibh a blandit pulvinar, nunc ipsum bibendum orci, a porta arcu lectus et ante. Praesent vitae sapien quis nunc ornare hendrerit nec efficitur velit. Pellentesque pretium quam nec cursus semper. Nullam scelerisque massa a elit interdum, sed consectetur elit blandit. Ut non odio laoreet, vestibulum eros quis, tristique mauris. Morbi quis venenatis nisl. Maecenas et ex gravida, ultrices nisi quis, egestas elit. Phasellus commodo pulvinar dui in tincidunt. Sed turpis purus, tempor nec elementum sed, ultrices a ligula.",
  },
  {
    id: "i2",
    name: "Daphne Doe",
    image: Avatar,
    students: 524,
    totalHours: 1768,
    courses: [
      { id: "coii1", icon: JS, course: "JavaScript" },
      { id: "coii2", icon: DSA, course: "DataStructure & Algorithm" },
    ],
    tagline:
      "Morbi imperdiet lectus non odio consectetur sagittis quis ut nunc. Fusce ac tortor id est interdum dictum",
    about:
      "Vivamus ullamcorper, magna id aliquet pulvinar, dui enim tristique metus, non volutpat lectus enim ut leo. Nulla facilisi. Vivamus sagittis posuere neque, a feugiat purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed justo felis, auctor ut varius nec, malesuada non lectus. Morbi lobortis et neque nec porta. Nunc rhoncus egestas lobortis. Integer gravida venenatis tellus at congue. Phasellus pellentesque, leo eu tristique imperdiet, erat purus tempus metus, tincidunt eleifend massa diam et magna. In faucibus, lectus ut dapibus sollicitudin, metus lectus venenatis purus, vel ultricies diam erat sed justo. Donec sodales, augue nec viverra eleifend, nulla tortor venenatis tellus, sit amet maximus justo urna vel augue. Praesent mi mi, pulvinar a ligula non, aliquet elementum quam. Nam a dictum metus. Mauris pharetra, augue in tempor efficitur, nulla sapien venenatis metus, eu ultricies libero nibh quis diam.",
  },
];
