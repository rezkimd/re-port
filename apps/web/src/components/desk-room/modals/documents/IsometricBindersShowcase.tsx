import React from "react";

interface IsometricBindersShowcaseProps {
  onSelectFolder: (folder: "cv" | "presentation" | "design" | "certification") => void;
}

export const IsometricBindersShowcase: React.FC<IsometricBindersShowcaseProps> = ({
  onSelectFolder,
}) => {
  return (
    <div className="relative w-full max-w-4xl flex items-center justify-center select-none">
      <svg
        viewBox="0 0 1000 680"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ground Shadow Blur */}
          <filter id="binderShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>

          {/* Gradients for Spine Metallic & Shadow Depth */}
          <linearGradient id="spineCvGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A89800" />
            <stop offset="25%" stopColor="#CBB800" />
            <stop offset="85%" stopColor="#CBB800" />
            <stop offset="100%" stopColor="#877B00" />
          </linearGradient>

          <linearGradient id="spinePresGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#005A4D" />
            <stop offset="25%" stopColor="#006E5E" />
            <stop offset="85%" stopColor="#006E5E" />
            <stop offset="100%" stopColor="#00473D" />
          </linearGradient>

          <linearGradient id="spineDesignGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C45E45" />
            <stop offset="25%" stopColor="#E07A5F" />
            <stop offset="85%" stopColor="#E07A5F" />
            <stop offset="100%" stopColor="#A3432B" />
          </linearGradient>

          <linearGradient id="spineCertGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#241D00" />
            <stop offset="25%" stopColor="#3A2F00" />
            <stop offset="85%" stopColor="#3A2F00" />
            <stop offset="100%" stopColor="#1A1500" />
          </linearGradient>

          <linearGradient id="sideCoverRedGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A82824" />
            <stop offset="50%" stopColor="#8E1B13" />
            <stop offset="100%" stopColor="#5E110C" />
          </linearGradient>
        </defs>

        {/* 1. PERSPECTIVE GROUND SHADOW (RESTING ON WOOD DESK) */}
        <ellipse
          cx="510"
          cy="620"
          rx="275"
          ry="28"
          fill="#110702"
          opacity="0.5"
          filter="url(#binderShadow)"
        />
        <ellipse
          cx="510"
          cy="618"
          rx="245"
          ry="15"
          fill="#110702"
          opacity="0.75"
        />

        {/* ======================================================================
            SOLID CLOSED LEFT WALL OF BINDER 1 (YELLOW / CV)
            Prevents left side from being hollow ("tidak bolong")
            Coords: connects spine left (270,170) -> back (305,125) -> back btm (305,565) -> spine btm (270,610)
        ====================================================================== */}
        <polygon
          points="270,170 305,125 305,565 270,610"
          fill="#8C7D00"
          stroke="#3A2F00"
          strokeWidth="2.5"
        />

        {/* ======================================================================
            BINDER 01: CURRICULUM VITAE (MUSTARD GOLD)
            Spine: x = 270 to 382 (width 112px)
        ====================================================================== */}
        <g
          id="binder-cv"
          onClick={() => onSelectFolder("cv")}
          className="cursor-pointer group transition-transform duration-300 hover:-translate-y-5"
        >
          {/* Top Isometric Face */}
          <polygon
            points="270,170 382,170 417,125 305,125"
            fill="#A89800"
            stroke="#3A2F00"
            strokeWidth="2"
          />
          {/* Paper Sheets Depth Sliver */}
          <polygon
            points="278,168 374,168 406,128 310,128"
            fill="#F4F4F0"
          />

          {/* Spine Base Rectangle */}
          <rect
            x="270"
            y="170"
            width="112"
            height="440"
            fill="url(#spineCvGrad)"
            stroke="#3A2F00"
            strokeWidth="2.5"
          />
          {/* Spine Right Edge Groove */}
          <rect x="378" y="170" width="4" height="440" fill="#241D00" opacity="0.4" />

          {/* White Label Card Frame */}
          <rect
            x="281"
            y="200"
            width="90"
            height="230"
            rx="5"
            fill="#E6ECEF"
            stroke="#3A2F00"
            strokeWidth="1.5"
          />
          <rect
            x="283"
            y="202"
            width="86"
            height="226"
            rx="4"
            fill="#FFFFFF"
          />

          {/* Card Accent Bar */}
          <rect x="294" y="212" width="64" height="5" rx="2" fill="#006E5E" />

          {/* Category Tag */}
          <text
            x="326"
            y="230"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            fontWeight="bold"
            letterSpacing="1"
            fill="#006E5E"
            textAnchor="middle"
          >
            01 // DOC
          </text>

          {/* Separate, Non-Overlapping Vertical Typography */}
          {/* Subtitle: ATS RESUME */}
          <g transform="translate(312, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8.5"
              fontWeight="bold"
              letterSpacing="2"
              fill="#6B7280"
              textAnchor="middle"
            >
              ATS RESUME
            </text>
          </g>

          {/* Title: CURRICULUM VITAE */}
          <g transform="translate(338, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="1"
              fill="#111827"
              textAnchor="middle"
            >
              CURRICULUM VITAE
            </text>
          </g>

          {/* Realistic Barcode Lines */}
          <g transform="translate(296, 395)" fill="#241D00">
            <rect x="0" y="0" width="2" height="18" />
            <rect x="4" y="0" width="1.5" height="18" />
            <rect x="8" y="0" width="3" height="18" />
            <rect x="13" y="0" width="1" height="18" />
            <rect x="16" y="0" width="2.5" height="18" />
            <rect x="21" y="0" width="1" height="18" />
            <rect x="24" y="0" width="3" height="18" />
            <rect x="29" y="0" width="1.5" height="18" />
            <rect x="33" y="0" width="2" height="18" />
            <rect x="37" y="0" width="1" height="18" />
            <rect x="40" y="0" width="3.5" height="18" />
            <rect x="46" y="0" width="1" height="18" />
            <rect x="50" y="0" width="2.5" height="18" />
            <rect x="55" y="0" width="1.5" height="18" />
            <rect x="58" y="0" width="2" height="18" />
          </g>

          {/* Metal Pull Ring */}
          <circle cx="326" cy="480" r="19" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1.5" />
          <circle cx="326" cy="480" r="16" fill="#EAEFF2" stroke="#8C959F" strokeWidth="1" />
          <circle cx="326" cy="480" r="10" fill="#151009" />

          {/* Rivets */}
          <rect x="306" y="530" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
          <rect x="306" y="560" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
        </g>

        {/* ======================================================================
            BINDER 02: PRESENTATION FILE (DEEP TEAL)
            Spine: x = 382 to 494 (width 112px)
        ====================================================================== */}
        <g
          id="binder-presentation"
          onClick={() => onSelectFolder("presentation")}
          className="cursor-pointer group transition-transform duration-300 hover:-translate-y-5"
        >
          {/* Top Isometric Face */}
          <polygon
            points="382,170 494,170 529,125 417,125"
            fill="#005A4D"
            stroke="#3A2F00"
            strokeWidth="2"
          />
          <polygon
            points="390,168 486,168 518,128 422,128"
            fill="#F4F4F0"
          />

          {/* Spine Base */}
          <rect
            x="382"
            y="170"
            width="112"
            height="440"
            fill="url(#spinePresGrad)"
            stroke="#3A2F00"
            strokeWidth="2.5"
          />
          <rect x="490" y="170" width="4" height="440" fill="#241D00" opacity="0.4" />

          {/* White Label Card Frame */}
          <rect
            x="393"
            y="200"
            width="90"
            height="230"
            rx="5"
            fill="#E6ECEF"
            stroke="#3A2F00"
            strokeWidth="1.5"
          />
          <rect
            x="395"
            y="202"
            width="86"
            height="226"
            rx="4"
            fill="#FFFFFF"
          />

          {/* Card Accent Bar */}
          <rect x="406" y="212" width="64" height="5" rx="2" fill="#1E56B0" />

          {/* Category Tag */}
          <text
            x="438"
            y="230"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            fontWeight="bold"
            letterSpacing="1"
            fill="#1E56B0"
            textAnchor="middle"
          >
            02 // DECK
          </text>

          {/* Subtitle: SLIDES & KEYNOTE */}
          <g transform="translate(424, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fontWeight="bold"
              letterSpacing="1.5"
              fill="#6B7280"
              textAnchor="middle"
            >
              SLIDES &amp; KEYNOTE
            </text>
          </g>

          {/* Title: PRESENTATION FILE */}
          <g transform="translate(450, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="12"
              fontWeight="900"
              letterSpacing="1"
              fill="#111827"
              textAnchor="middle"
            >
              PRESENTATION FILE
            </text>
          </g>

          {/* Barcode */}
          <g transform="translate(408, 395)" fill="#241D00">
            <rect x="0" y="0" width="1.5" height="18" />
            <rect x="3" y="0" width="3" height="18" />
            <rect x="8" y="0" width="1" height="18" />
            <rect x="11" y="0" width="2" height="18" />
            <rect x="15" y="0" width="3.5" height="18" />
            <rect x="21" y="0" width="1" height="18" />
            <rect x="24" y="0" width="2" height="18" />
            <rect x="28" y="0" width="1" height="18" />
            <rect x="31" y="0" width="3" height="18" />
            <rect x="36" y="0" width="1.5" height="18" />
            <rect x="40" y="0" width="2" height="18" />
            <rect x="44" y="0" width="3" height="18" />
            <rect x="49" y="0" width="1" height="18" />
            <rect x="52" y="0" width="2.5" height="18" />
            <rect x="57" y="0" width="1" height="18" />
          </g>

          {/* Metal Pull Ring */}
          <circle cx="438" cy="480" r="19" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1.5" />
          <circle cx="438" cy="480" r="16" fill="#EAEFF2" stroke="#8C959F" strokeWidth="1" />
          <circle cx="438" cy="480" r="10" fill="#151009" />

          {/* Rivets */}
          <rect x="418" y="530" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
          <rect x="418" y="560" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
        </g>

        {/* ======================================================================
            BINDER 03: DESIGN CHAMBER (TERRACOTTA)
            Spine: x = 494 to 606 (width 112px)
        ====================================================================== */}
        <g
          id="binder-design"
          onClick={() => onSelectFolder("design")}
          className="cursor-pointer group transition-transform duration-300 hover:-translate-y-5"
        >
          {/* Top Isometric Face */}
          <polygon
            points="494,170 606,170 641,125 529,125"
            fill="#B8553D"
            stroke="#3A2F00"
            strokeWidth="2"
          />
          <polygon
            points="502,168 598,168 630,128 534,128"
            fill="#F4F4F0"
          />

          {/* Spine Base */}
          <rect
            x="494"
            y="170"
            width="112"
            height="440"
            fill="url(#spineDesignGrad)"
            stroke="#3A2F00"
            strokeWidth="2.5"
          />
          <rect x="602" y="170" width="4" height="440" fill="#241D00" opacity="0.4" />

          {/* White Label Card Frame */}
          <rect
            x="505"
            y="200"
            width="90"
            height="230"
            rx="5"
            fill="#E6ECEF"
            stroke="#3A2F00"
            strokeWidth="1.5"
          />
          <rect
            x="507"
            y="202"
            width="86"
            height="226"
            rx="4"
            fill="#FFFFFF"
          />

          {/* Card Accent Bar */}
          <rect x="518" y="212" width="64" height="5" rx="2" fill="#CBB800" />

          {/* Category Tag */}
          <text
            x="550"
            y="230"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8.5"
            fontWeight="bold"
            letterSpacing="0.8"
            fill="#CBB800"
            textAnchor="middle"
          >
            03 // WORKSPACE
          </text>

          {/* Subtitle: PENPOT ARTIFACTS */}
          <g transform="translate(536, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fontWeight="bold"
              letterSpacing="1.5"
              fill="#6B7280"
              textAnchor="middle"
            >
              PENPOT ARTIFACTS
            </text>
          </g>

          {/* Title: DESIGN CHAMBER */}
          <g transform="translate(562, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="1"
              fill="#111827"
              textAnchor="middle"
            >
              DESIGN CHAMBER
            </text>
          </g>

          {/* Barcode */}
          <g transform="translate(520, 395)" fill="#241D00">
            <rect x="0" y="0" width="2" height="18" />
            <rect x="4" y="0" width="2" height="18" />
            <rect x="8" y="0" width="1" height="18" />
            <rect x="11" y="0" width="3" height="18" />
            <rect x="16" y="0" width="1.5" height="18" />
            <rect x="20" y="0" width="2.5" height="18" />
            <rect x="25" y="0" width="1" height="18" />
            <rect x="28" y="0" width="3" height="18" />
            <rect x="33" y="0" width="1" height="18" />
            <rect x="36" y="0" width="2" height="18" />
            <rect x="40" y="0" width="3.5" height="18" />
            <rect x="46" y="0" width="1.5" height="18" />
            <rect x="50" y="0" width="2" height="18" />
            <rect x="54" y="0" width="1" height="18" />
            <rect x="57" y="0" width="2.5" height="18" />
          </g>

          {/* Metal Pull Ring */}
          <circle cx="550" cy="480" r="19" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1.5" />
          <circle cx="550" cy="480" r="16" fill="#EAEFF2" stroke="#8C959F" strokeWidth="1" />
          <circle cx="550" cy="480" r="10" fill="#151009" />

          {/* Rivets */}
          <rect x="530" y="530" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
          <rect x="530" y="560" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
        </g>

        {/* ======================================================================
            BINDER 04: CERTIFICATION (DARK UMBER)
            Spine: x = 606 to 718 (width 112px)
        ====================================================================== */}
        <g
          id="binder-certification"
          onClick={() => onSelectFolder("certification")}
          className="cursor-pointer group transition-transform duration-300 hover:-translate-y-5"
        >
          {/* Top Isometric Face */}
          <polygon
            points="606,170 718,170 753,125 641,125"
            fill="#171200"
            stroke="#3A2F00"
            strokeWidth="2"
          />
          <polygon
            points="614,168 710,168 742,128 646,128"
            fill="#F4F4F0"
          />

          {/* Spine Base */}
          <rect
            x="606"
            y="170"
            width="112"
            height="440"
            fill="url(#spineCertGrad)"
            stroke="#3A2F00"
            strokeWidth="2.5"
          />
          <rect x="714" y="170" width="4" height="440" fill="#000000" opacity="0.6" />

          {/* White Label Card Frame */}
          <rect
            x="617"
            y="200"
            width="90"
            height="230"
            rx="5"
            fill="#E6ECEF"
            stroke="#3A2F00"
            strokeWidth="1.5"
          />
          <rect
            x="619"
            y="202"
            width="86"
            height="226"
            rx="4"
            fill="#FFFFFF"
          />

          {/* Card Accent Bar */}
          <rect x="630" y="212" width="64" height="5" rx="2" fill="#B42318" />

          {/* Category Tag */}
          <text
            x="662"
            y="230"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            fontWeight="bold"
            letterSpacing="1"
            fill="#B42318"
            textAnchor="middle"
          >
            04 // CERT
          </text>

          {/* Subtitle: VERIFIED CREDENTIALS */}
          <g transform="translate(648, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fontWeight="bold"
              letterSpacing="1.2"
              fill="#6B7280"
              textAnchor="middle"
            >
              VERIFIED CREDENTIALS
            </text>
          </g>

          {/* Title: CERTIFICATION */}
          <g transform="translate(674, 310) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="1"
              fill="#111827"
              textAnchor="middle"
            >
              CERTIFICATION
            </text>
          </g>

          {/* Barcode */}
          <g transform="translate(632, 395)" fill="#241D00">
            <rect x="0" y="0" width="2.5" height="18" />
            <rect x="4" y="0" width="1" height="18" />
            <rect x="7" y="0" width="2" height="18" />
            <rect x="11" y="0" width="3.5" height="18" />
            <rect x="16" y="0" width="1" height="18" />
            <rect x="19" y="0" width="2" height="18" />
            <rect x="23" y="0" width="1.5" height="18" />
            <rect x="27" y="0" width="3" height="18" />
            <rect x="32" y="0" width="1" height="18" />
            <rect x="35" y="0" width="2" height="18" />
            <rect x="39" y="0" width="3" height="18" />
            <rect x="44" y="0" width="1.5" height="18" />
            <rect x="48" y="0" width="2" height="18" />
            <rect x="52" y="0" width="1" height="18" />
            <rect x="55" y="0" width="3" height="18" />
          </g>

          {/* Metal Pull Ring */}
          <circle cx="662" cy="480" r="19" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1.5" />
          <circle cx="662" cy="480" r="16" fill="#EAEFF2" stroke="#8C959F" strokeWidth="1" />
          <circle cx="662" cy="480" r="10" fill="#151009" />

          {/* Rivets */}
          <rect x="642" y="530" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />
          <rect x="642" y="560" width="40" height="9" rx="2.5" fill="#D0D7DE" stroke="#3A2F00" strokeWidth="1" />

          {/* ======================================================================
              SOLID CLOSED RIGHT SIDE COVER (RED HARDBOUND SIDE)
              As requested: "file holder merah itu terbuka gitu? buat dia tertutup."
              Coords: connects spine right (718,170) -> back (753,125) -> back btm (753,565) -> spine btm (718,610)
          ====================================================================== */}
          <polygon
            points="718,170 753,125 753,565 718,610"
            fill="url(#sideCoverRedGrad)"
            stroke="#3A2F00"
            strokeWidth="2.5"
          />

          {/* Embossed Gold Accent Crease on Closed Cover */}
          <line
            x1="722"
            y1="180"
            x2="722"
            y2="600"
            stroke="#CBB800"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Subtle Closed Seal Monogram Stamp on Red Face */}
          <g transform="translate(735, 360) rotate(-90)">
            <text
              x="0"
              y="0"
              fontFamily="JetBrains Mono, monospace"
              fontSize="7.5"
              fontWeight="bold"
              letterSpacing="2"
              fill="#F5EE99"
              opacity="0.8"
              textAnchor="middle"
            >
              SEALED ARCHIVE
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
