import logo from "./logo.svg";
import { ManualParallax } from "./ManualParallax";
import 'animate.css';
import { CardHover } from "./CardHover/CardHover";
import { ScrollLateral } from "./ScrollLateral";
import { Papito } from "./SectionComponent/Papito";

export default function app() {
  return (
    <div>
      <ScrollLateral/>
      <ManualParallax/>
      <CardHover/>
      
          </div>
  );
}
