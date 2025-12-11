import LiquidGlass from "liquid-glass-react";

function NavItem({ href, children }) {
  return (
    <LiquidGlass
      displacementScale={150}
      blurAmount={0.1}
      saturation={200}
      aberrationIntensity={2}
      elasticity={0.35}
      cornerRadius={100}
      padding="1em 2em"
      mode="standard"
      className="cursor-pointer border rounded-full"
    >
      <span href={href} className="  rounded-lg transition block">
        {children}
      </span>
    </LiquidGlass>
  );
}


export default NavItem;