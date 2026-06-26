

/* A single cube face positioned in 3D space */
function Face({ transform, size }: { transform: string; size: number }) {
  return (
    <div
      className="absolute border border-primary/30 bg-primary/[0.03]"
      style={{
        width: size,
        height: size,
        transform,
        boxShadow: 'inset 0 0 24px rgba(17,76,90,0.08)',
      }}
    />
  );
}

/* Glowing vertex point with radial gradient */
function Vertex({ x, y, z, size = 10, color = '#FFC801' }: { x: number; y: number; z: number; size?: number; color?: string }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        transform: `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%)`,
        background: `radial-gradient(circle, ${color} 0%, ${color}88 30%, transparent 70%)`,
        boxShadow: `0 0 12px ${color}66`,
      }}
    />
  );
}

/* Orbiting particle */
function Particle({ radius, duration, delay, size = 6, tilt = 0 }: { radius: number; duration: number; delay: number; size?: number; tilt?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `rotateX(${tilt}deg)` }}
    >
      <div
        className="absolute rounded-full bg-accent"
        style={{
          width: size,
          height: size,
          left: -size / 2,
          top: -size / 2,
          ['--orbit-r' as string]: `${radius}px`,
          background: 'radial-gradient(circle, #FFC801 0%, #FF9932 50%, transparent 80%)',
          boxShadow: '0 0 10px #FFC80188',
          animation: `orbit ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}

export function CubeGraphic({ className = '' }: { className?: string }) {
  const outerSize = 200;
  const innerSize = 100;
  const half = outerSize / 2;
  const innerHalf = innerSize / 2;

  // outer cube vertices (8 corners)
  const outerVerts = [
    { x: -half, y: -half, z: -half },
    { x: half, y: -half, z: -half },
    { x: half, y: half, z: -half },
    { x: -half, y: half, z: -half },
    { x: -half, y: -half, z: half },
    { x: half, y: -half, z: half },
    { x: half, y: half, z: half },
    { x: -half, y: half, z: half },
  ];

  // inner cube vertices
  const innerVerts = [
    { x: -innerHalf, y: -innerHalf, z: -innerHalf },
    { x: innerHalf, y: -innerHalf, z: -innerHalf },
    { x: innerHalf, y: innerHalf, z: -innerHalf },
    { x: -innerHalf, y: innerHalf, z: -innerHalf },
    { x: -innerHalf, y: -innerHalf, z: innerHalf },
    { x: innerHalf, y: -innerHalf, z: innerHalf },
    { x: innerHalf, y: innerHalf, z: innerHalf },
    { x: -innerHalf, y: innerHalf, z: innerHalf },
  ];

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div
        className="relative"
        style={{
          width: 360,
          height: 360,
          perspective: '900px',
          perspectiveOrigin: '50% 45%',
        }}
      >
        {/* scene container with subtle float */}
        <div
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d', animation: 'floatY 6s ease-in-out infinite' }}
        >
          {/* outer cube — clockwise */}
          <div
            className="absolute left-1/2 top-1/2 animate-spinY"
            style={{
              width: outerSize,
              height: outerSize,
              marginLeft: -outerSize / 2,
              marginTop: -outerSize / 2,
              transformStyle: 'preserve-3d',
            }}
          >
            <Face transform={`translateZ(${half}px)`} size={outerSize} />
            <Face transform={`rotateY(180deg) translateZ(${half}px)`} size={outerSize} />
            <Face transform={`rotateY(90deg) translateZ(${half}px)`} size={outerSize} />
            <Face transform={`rotateY(-90deg) translateZ(${half}px)`} size={outerSize} />
            <Face transform={`rotateX(90deg) translateZ(${half}px)`} size={outerSize} />
            <Face transform={`rotateX(-90deg) translateZ(${half}px)`} size={outerSize} />

            {/* outer glowing vertices */}
            {outerVerts.map((v, i) => (
              <Vertex key={`o-${i}`} x={v.x} y={v.y} z={v.z} size={12} color="#114C5A" />
            ))}
          </div>

          {/* inner cube — counter-clockwise */}
          <div
            className="absolute left-1/2 top-1/2 animate-spinYReverse"
            style={{
              width: innerSize,
              height: innerSize,
              marginLeft: -innerSize / 2,
              marginTop: -innerSize / 2,
              transformStyle: 'preserve-3d',
            }}
          >
            <Face transform={`translateZ(${innerHalf}px)`} size={innerSize} />
            <Face transform={`rotateY(180deg) translateZ(${innerHalf}px)`} size={innerSize} />
            <Face transform={`rotateY(90deg) translateZ(${innerHalf}px)`} size={innerSize} />
            <Face transform={`rotateY(-90deg) translateZ(${innerHalf}px)`} size={innerSize} />
            <Face transform={`rotateX(90deg) translateZ(${innerHalf}px)`} size={innerSize} />
            <Face transform={`rotateX(-90deg) translateZ(${innerHalf}px)`} size={innerSize} />

            {/* inner glowing vertices */}
            {innerVerts.map((v, i) => (
              <Vertex key={`i-${i}`} x={v.x} y={v.y} z={v.z} size={10} color="#FFC801" />
            ))}
          </div>

          {/* connecting lines between corresponding outer/inner vertices (static, in scene space) */}
          <svg
            className="absolute left-1/2 top-1/2 pointer-events-none"
            width={outerSize}
            height={outerSize}
            style={{ marginLeft: -outerSize / 2, marginTop: -outerSize / 2, overflow: 'visible' }}
          >
            {outerVerts.map((ov, i) => {
              const iv = innerVerts[i];
              return (
                <line
                  key={`c-${i}`}
                  x1={outerSize / 2 + ov.x * 0.5}
                  y1={outerSize / 2 + ov.y * 0.5}
                  x2={outerSize / 2 + iv.x * 0.5}
                  y2={outerSize / 2 + iv.y * 0.5}
                  stroke="#FFC801"
                  strokeWidth="1"
                  strokeOpacity="0.35"
                  strokeDasharray="3 4"
                />
              );
            })}
          </svg>

          {/* orbiting particles — multiple rings */}
          <div className="absolute left-1/2 top-1/2" style={{ transformStyle: 'preserve-3d' }}>
            <Particle radius={150} duration={8} delay={0} size={7} tilt={0} />
            <Particle radius={150} duration={8} delay={2.7} size={5} tilt={0} />
            <Particle radius={150} duration={8} delay={5.3} size={6} tilt={0} />
          </div>
          <div className="absolute left-1/2 top-1/2" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(70deg)' }}>
            <Particle radius={130} duration={10} delay={1} size={6} />
            <Particle radius={130} duration={10} delay={4} size={5} />
            <Particle radius={130} duration={10} delay={7} size={7} />
          </div>
          <div className="absolute left-1/2 top-1/2" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(70deg) rotateX(20deg)' }}>
            <Particle radius={170} duration={12} delay={0.5} size={5} />
            <Particle radius={170} duration={12} delay={6} size={6} />
          </div>
        </div>

        {/* radial glow base */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(255,200,1,0.08) 0%, rgba(17,76,90,0.04) 40%, transparent 70%)',
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
