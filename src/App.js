import logo from "./logo.svg";
import { ManualParallax } from "./ManualParallax";
import 'animate.css';
import { CardHover } from "./CardHover/CardHover";

export default function app() {
  return (
    <div>
      <ManualParallax/>
      <CardHover/>
    </div>
  );
}
