export default function FractalNoiseSVG(props) {
    return (
      <svg {...props} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency={props.baseFrequency ?? "0.65"} numOctaves={props.numOctaves ?? "2"} stitchTiles="stitch" />
        </filter>

        <rect width={props.width ?? '100%'} height={props.height ?? '100%'} filter="url(#noiseFilter)" />
      </svg>
    );
}