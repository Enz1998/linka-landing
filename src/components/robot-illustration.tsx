const line = "rgba(255,255,255,0.28)";
const lineSoft = "rgba(255,255,255,0.16)";

export function RobotIllustration() {
  return (
    <svg
      viewBox="0 0 480 380"
      className="mx-auto w-full max-w-lg"
      role="img"
      aria-label="Ilustración de un robot relajado frente a su laptop, con un workflow de automatización en pantalla"
    >
      {/* static ground shadow — stays put while the group above floats */}
      <ellipse cx="240" cy="344" rx="168" ry="13" fill="rgba(0,0,0,0.28)" />

      <g className="animate-float motion-reduce:animate-none">
        {/* chair back, behind the robot */}
        <rect x="253" y="86" width="112" height="176" rx="28" fill="var(--ink-800)" opacity="0.55" />

        {/* resting arm */}
        <rect x="291" y="192" width="18" height="46" rx="9" fill="var(--ink-700)" stroke={line} />

        {/* torso */}
        <rect x="268" y="146" width="82" height="112" rx="18" fill="var(--ink-800)" stroke={line} />
        <rect x="298" y="182" width="22" height="8" rx="4" fill="rgba(255,255,255,0.14)" />

        {/* head, tilted for a relaxed pose */}
        <g transform="rotate(-6 309 118)">
          <line x1="309" y1="86" x2="309" y2="64" stroke={line} strokeWidth="3" strokeLinecap="round" />
          <circle cx="309" cy="58" r="5" fill="var(--brand)" className="animate-dot-pulse motion-reduce:animate-none" />
          <rect x="269" y="86" width="80" height="64" rx="16" fill="var(--ink-800)" stroke={line} />
          <circle cx="295" cy="114" r="6" fill="var(--brand)" />
          <path d="M321,112 q6,6 12,0" stroke="var(--brand)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M295,134 Q309,144 327,132" stroke={line} strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* desk */}
        <rect x="90" y="228" width="320" height="12" rx="2" fill="var(--ink-700)" stroke={lineSoft} />
        <rect x="100" y="240" width="300" height="64" rx="4" fill="var(--ink-800)" stroke={lineSoft} />

        {/* plant */}
        <path d="M104,220 L136,220 L131,240 L109,240 Z" fill="var(--ink-700)" stroke={lineSoft} />
        <path d="M120,220 Q108,200 98,192" stroke={lineSoft} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120,220 Q120,192 120,182" stroke={lineSoft} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120,220 Q134,202 144,196" stroke={lineSoft} strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* laptop with a tiny workflow diagram on screen */}
        <rect x="150" y="220" width="80" height="8" rx="2" fill="var(--ink-700)" stroke={lineSoft} />
        <rect x="158" y="180" width="64" height="42" rx="4" fill="var(--ink-900)" stroke={line} />
        <line x1="172" y1="202" x2="192" y2="202" stroke="var(--brand)" strokeOpacity="0.55" strokeWidth="1.5" />
        <line x1="192" y1="202" x2="206" y2="193" stroke="var(--brand)" strokeOpacity="0.55" strokeWidth="1.5" />
        <circle cx="172" cy="202" r="2.5" fill="var(--brand)" />
        <circle cx="192" cy="202" r="2.5" fill="var(--brand)" />
        <circle cx="206" cy="193" r="2.5" fill="var(--brand)" />

        {/* mug with the linka mark, steam rising */}
        <path d="M251,202 q-4,-9 0,-15" stroke={lineSoft} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M259,202 q-4,-9 0,-15" stroke={lineSoft} strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="246" y="202" width="24" height="22" rx="4" fill="var(--ink-700)" stroke={lineSoft} />
        <path d="M270,206 q10,3 0,12" stroke={lineSoft} strokeWidth="2" fill="none" />
        <rect x="254" y="208" width="8" height="8" rx="2" fill="var(--brand)" />
      </g>
    </svg>
  );
}
