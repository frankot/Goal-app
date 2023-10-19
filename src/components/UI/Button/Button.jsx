// export default function Button(props) {
//   const classes = "butt " + props.className;
//   return <button type={props.type} onClick={props.onClick} className={classes}>{props.children}</button>;
// }
import tw from "tailwind-styled-components";

const Button = tw.button`
w-fit 
rounded-lg
bg-orange-700
${props=>(props.invalid ? 'bg-red-700': 'bg-green-700')}
px-4 
py-2 
duration-300 
${props=>(props.invalid ? 'hover:bg-orange-500': 'hover:bg-green-900')}
`;
export default Button;
